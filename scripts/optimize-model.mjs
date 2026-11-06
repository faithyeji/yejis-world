// Shrinks the Blender export for the web.
//   npm run model            (reads public/models/storefront.src.glb -> writes public/models/storefront.glb)
//
// Export from Blender to public/models/storefront.src.glb, then run this. It:
//   - drops normal maps on flat ground/trim materials (invisible under the paint effect)
//   - resizes every texture to at most 1024px and re-encodes as WebP
//   (geometry is left as-is: it's ~0.3 MB and the low-poly flat shading doesn't survive mesh compression)
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, prune, textureCompress } from "@gltf-transform/functions";
import sharp from "sharp";

const SRC = "public/models/storefront.src.glb";
const OUT = "public/models/storefront.glb";
const NO_NORMALS = ["Stone_Coping", "Concrete_Sidewalk", "Asphalt"];

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

const doc = await io.read(SRC);
for (const mat of doc.getRoot().listMaterials()) {
  if (NO_NORMALS.includes(mat.getName())) mat.setNormalTexture(null);
}
await doc.transform(
  prune(),
  dedup(),
  textureCompress({ encoder: sharp, targetFormat: "webp", resize: [1024, 1024], quality: 80 }),
);
await io.write(OUT, doc);

const fs = await import("node:fs");
const mb = (p) => (fs.statSync(p).size / 1e6).toFixed(2);
console.log(`model: ${mb(SRC)} MB -> ${mb(OUT)} MB`);
