import ProjectPage from "@/app/components/ProjectPage";

export default function StoryGraphPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/deeplocal.webp"
      headerImageAlt="Deeplocal project header"
      title="DEEPLOCAL"
      description={[
        "Deeplocal is an award-winning creative technology agency that creates interactive experiences connecting people to brands. I was fortunate enough to spend a Yinzer summer working there as an intern and continue on as a freelance designer in the fall working across a breadth of various projects and skillsets! Most of this work is under NDA and is available on request.",
      ]}
      role="Design Intern, Freelancer"
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
            NOTABLE PROJECTS
          </h3>
          <p className="text-gray-700 font-sans text-md"></p>
          <div className="flex font-serif italic gap-12">
            <div className="flex flex-col">
              <h1>Google Pixel Room Exhibit</h1>
            </div>
            <div className="flex flex-col">
              <h1>Netflix Meet Your Match</h1>
            </div>
            <div className="flex flex-col">
              <h1>Google 555 Java Cloud Construction</h1>
            </div>
            <div className="flex flex-col">
              <h1>Microsoft x Epic EC1 Showcase</h1>
            </div>
          </div>
        </div>
      </div>
    </ProjectPage>
  );
}
