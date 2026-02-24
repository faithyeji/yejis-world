import ProjectPage from "@/app/components/ProjectPage";

export default function WabiPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/wabi.webp"
      headerImageAlt="Wabi project header"
      title="WABI"
      description={[
        "Add your project description here.",
      ]}
      role={["Role TBD"]}
      timeline="TBD"
      disciplines={["Graphic Design", "Brand"]}
    >
      <div className="space-y-6">
        {/* Add project images to public/images/projects/wabi/ and use <Image> here */}
      </div>
    </ProjectPage>
  );
}
