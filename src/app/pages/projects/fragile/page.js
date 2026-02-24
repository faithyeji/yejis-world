import ProjectPage from "@/app/components/ProjectPage";

export default function FragilePage() {
  return (
    <ProjectPage
      headerImage="/images/projects/fragile.webp"
      headerImageAlt="Fragile project header"
      title="FRAGILE"
      description={[
        "Add your project description here.",
      ]}
      role={["Role TBD"]}
      timeline="TBD"
      disciplines={["Graphic Design", "Brand"]}
    >
      <div className="space-y-6">
        {/* Add project images to public/images/projects/fragile/ and use <Image> here */}
      </div>
    </ProjectPage>
  );
}
