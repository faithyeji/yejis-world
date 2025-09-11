import ProjectPage from "@/app/components/ProjectPage";

export default function FatheadPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/fatheadkid.webp"
      headerImageAlt="Fathead White Paper project header"
      title="FATHEAD WHITE PAPER"
      description={[
        "Fathead is a Cannes Film Festival award-winning & NAACP-nominated short film made as a Virtual Production on an LED-volume with all in-camera VFX and Epic Games' Unreal Engine. As lead designer, I created 186 pages of pure graphic design for the film's White Paper, poster, and tour materials.",
      ]}
      role="Lead Graphic Designer"
      timeline="2022"
      disciplines={["Graphic Design", "Publication Design", "Brand"]}
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-mono text-sm text-gray-500 uppercase mb-2">
            Process
          </h3>
          <p className="text-gray-700 font-sans text-md">
            Started with extensive research into the film's themes, characters,
            and cultural impact. Created a comprehensive visual system that
            honored the powerful storytelling while maintaining readability and
            information hierarchy across 186 pages.
          </p>
        </div>
      </div>
    </ProjectPage>
  );
}
