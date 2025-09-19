import ProjectPage from "@/app/components/ProjectPage";
import Image from "next/image";

export default function StoryGraphPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/deeplocal.webp"
      headerImageAlt="Deeplocal project header"
      title="DEEPLOCAL"
      description={[
        "Deeplocal is an award-winning creative technology agency that creates fun interactive experiences connecting people to brands. I was fortunate enough to spend a Yinzer (shoutout Pittsburgh) summer there as an intern and was extended to continue as a freelance designer in the fall — an experience that had me working across a breadth of various projects, pitches, and skillsets! This work is under NDA and is available upon request.",
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
          <h3 className="font-mono text-sm text-gray-500 uppercase mb-2">
            NOTABLE WORK
          </h3>
          <div className="flex flex-wrap font-sans text-md gap-12 mt-6">
            <div className="flex flex-col w-60 h-52 justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
              <Image
                src="/images/projects/pixelroom.webp"
                alt="Pixelroom"
                width={500}
                height={400}
                className="w-auto h-fit rounded-lg"
                priority
              />
              <h1>Google Pixelroom Exhibit</h1>
            </div>
            <div className="flex flex-col w-60 h-52 justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
              <Image
                src="/images/projects/netflix.webp"
                alt="Netflix House"
                width={600}
                height={400}
                className="w-auto h-fit rounded-lg"
                priority
              />
              <h1>Netflix Replay</h1>
            </div>
            <div className="flex flex-col w-60 h-52 justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
              <Image
                src="/images/projects/cloud.webp"
                alt="Cloud"
                width={500}
                height={400}
                className="w-auto h-fit rounded-lg"
                priority
              />
              <h1>Google Cloud Construction</h1>
            </div>
            <div className="flex flex-col w-60 h-52 justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
              <Image
                src="/images/projects/ec1.webp"
                alt="Cloud"
                width={500}
                height={400}
                className="w-auto h-fit rounded-lg"
                priority
              />
              <h1>Microsoft x Epic Showcase</h1>
            </div>
          </div>
        </div>
      </div>
    </ProjectPage>
  );
}
