import ProjectPage from "@/app/components/ProjectPage";

export default function WabiPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/wabi.webp"
      headerImageAlt="Wabi project header"
      title="WABI"
      description={[""]}
      role={["Contract Brand Designer"]}
      // timeline="TBD"
      disciplines={["Graphic Design", "Brand", "Copywriting", ""]}
    >
      <div className="space-y-6 font-sans">loading... coming soon :p</div>
    </ProjectPage>
  );
}
