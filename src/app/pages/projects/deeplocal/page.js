import ProjectPage from "@/app/components/ProjectPage";
import Image from "next/image";

export default function StoryGraphPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/deeplocal.webp"
      headerImageAlt="Deeplocal project header"
      title="DEEPLOCAL"
      description={[
        "Deeplocal is an award-winning creative technology agency that creates fun interactive experiences connecting people to brands. I spent a Yinzer (shoutout Pittsburgh) summer there as an intern and was extended to continue as a freelance designer in the fall — an experience that had me working across a breadth of various projects, pitches, and skillsets! This work is under NDA and is available upon request.",
      ]}
      role={["Design Intern", "Freelancer"]}
      timeline="May - September 2025"
      disciplines={[
        "Art Direction & Concepting",
        "Experience Design",
        "Motion & Visual Mockups",
        "UI/UX Design",
        "RFP Pitching",
      ]}
    >
      <div className="space-y-6">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans text-md mt-6">
            {/* Project 1 */}
            <div className="flex flex-col justify-start items-center gap-2 p-6 hover:scale-105 transition-all ease-in-out bg-white rounded-lg border-gray-200 border">
              <Image
                src="/images/projects/pixelroomUI.webp"
                alt="Pixelroom"
                width={400}
                height={400}
                className="w-full h-72 object-cover rounded-lg"
                priority
              />
              <h1 className="font-serif italic text-xl text-center mt-4">
                Google Pixelroom Exhibit
              </h1>
              <p className="text-center text-sm text-gray-600">
                Concept sketching, signage layout, UI/UX design, and art
                direction for an immersive, take-home floral exhibit at the
                Chelsea Google Pixelroom.
              </p>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col justify-start items-center gap-2 p-6 hover:scale-105 transition-all ease-in-out bg-white rounded-lg border-gray-200 border">
              <Image
                src="/images/projects/netflix.webp"
                alt="Netflix House"
                width={400}
                height={400}
                className="w-full h-72 object-cover rounded-lg"
                priority
              />
              <h1 className="font-serif italic text-xl text-center mt-4">
                Netflix Replay
              </h1>
              <p className="text-center text-sm text-gray-600">
                Designed UI, styleframes, and assisted with moodboarding / art
                direction for a Netflix original-themed arcade game experience.
              </p>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col justify-start items-center gap-2 p-6 hover:scale-105 transition-all ease-in-out bg-white rounded-lg border-gray-200 border">
              <Image
                src="/images/projects/cloud.webp"
                alt="Cloud"
                width={400}
                height={400}
                className="w-full h-72 object-cover rounded-lg"
                priority
              />
              <h1 className="font-serif italic text-xl text-center mt-4">
                Google Cloud Construction
              </h1>
              <p className="text-center text-sm text-gray-600">
                Created animated and static mockups (After Effects, Photoshop),
                assisted with interaction / motion art direction
                (TouchDesigner), formatted decks for stakeholders.
              </p>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col justify-start items-center gap-2 p-6 hover:scale-105 transition-all ease-in-out bg-white rounded-lg border-gray-200 border">
              <Image
                src="/images/projects/ec1.webp"
                alt="Microsoft x Epic Showcase"
                width={400}
                height={400}
                className="w-full h-72 object-cover rounded-lg"
                priority
              />
              <h1 className="font-serif italic text-xl text-center mt-4">
                Microsoft x Epic Showcase
              </h1>
              <p className="text-center text-sm text-gray-600">
                Created static visual assets for 3D scenes and animated motion
                mockups for a collaborative showcase featuring Microsoft and
                Epic capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProjectPage>
  );
}
