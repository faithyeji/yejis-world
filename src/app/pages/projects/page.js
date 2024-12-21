import Image from "next/image";
import Project from "@/app/components/Project";

export default function Projects() {
  return (
    <main className="">
      <div className="flex flex-wrap mt-16 justify-center items-center text-center gap-8 w-full text-neutral-600">
        <Project
          title="The StoryGraph"
          type="UI/UX DESIGN"
          imageSrc="/images/projects/storygraph.webp"
          link="https://www.figma.com/proto/1GGlcr1JEq7slx0zS53tKa/Career-Case-Studies?page-id=0%3A1&node-id=1-2&node-type=frame&viewport=864%2C471%2C0.05&t=6SLbc7dnNFzr2wvj-1&scaling=contain&content-scaling=fixed"
          description="Working as the sole UX designer for a book-sharing platform with 3 million users."
        />
        <Project
          title="Lumen"
          type="UX/BRANDING"
          imageSrc="/images/projects/lumen.webp"
          description="Collecting, organizing, and illuminating user feedback to highlight key insights."
        />
        <Project
          title="Namu"
          type="DESIGN, FULL-STACK DEV"
          imageSrc="/images/projects/namu.webp"
          description="A digital garden where work-in-progresses and unfinished projects can grow."
        />
        <Project
          title="Encore"
          type="UI/UX DESIGN (TEAM)"
          imageSrc="/images/projects/encore2.webp"
          link="https://www.figma.com/proto/1GGlcr1JEq7slx0zS53tKa/Yeji-Seo-Case-Studies?node-id=13-23&t=AtnKcVpdvkXMjAT1-1"
          description="Designing a space for aspiring musicians to find community and support."
        />
        <Project
          title="Fathead WP"
          type="GRAPHIC DESIGN"
          imageSrc="/images/projects/fatheadkid.webp"
          link="https://drive.google.com/file/d/1WfWgL6jatDaOm4jOPPUI4FIm1luHpora/view?usp=sharing"
          description="186 pages of pure graphic design for the NAACP award-winning film's White Paper."
        />
        <Project
          title="Synth"
          type="CREATIVE CODING"
          imageSrc="/images/projects/synth.webp"
          link="https://drive.google.com/file/d/1DVNiTyK964iSHWizV1mqaYqbdLrnYjqL/view?usp=sharing"
          description="A TouchDesigner project that plays with hand & midi inputs to visualize music in real-time."
        />
      </div>
    </main>
  );
}
