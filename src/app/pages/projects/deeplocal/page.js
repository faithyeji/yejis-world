import ProjectPage from "@/app/components/ProjectPage";

export default function StoryGraphPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/storygraph.webp"
      headerImageAlt="Deeplocal project header"
      title="DEEPLOCAL"
      description={[
        "Deeplocal is an award-winning creative technology agency.",
      ]}
      role="Design Intern"
      timeline="May - September 2025"
      disciplines={["Motion", "User Research", "Design Systems"]}
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-mono text-sm text-gray-500 uppercase mb-2">
            PROJECTS
          </h3>
          <p className="text-gray-700 font-sans text-md"></p>
        </div>
      </div>
    </ProjectPage>
  );
}
