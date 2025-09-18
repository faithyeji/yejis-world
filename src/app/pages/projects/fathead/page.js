import ProjectPage from "@/app/components/ProjectPage";
import Image from "next/image";

export default function FatheadPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/fatheadkid.webp"
      headerImageAlt="Fathead White Paper project header"
      title="FATHEAD WHITE PAPER"
      description={[
        "Fathead is a Cannes Film Festival award-winning & NAACP-nominated short film made as a Virtual Production on an LED-volume with all in-camera VFX and Epic Games' Unreal Engine. As lead designer, I created 186 pages of pure graphic design for the film's white paper, posters, and tour materials.",
      ]}
      role="Lead Graphic Designer"
      timeline="2023-2024"
      disciplines={["Graphic Design", "Publication Design", "Brand"]}
    >
      <div className="space-y-6">
        <div className="bg-black">
          <Image
            src="/images/projects/fathead/craig.webp"
            alt="craig"
            width={1000}
            height={800}
            priority
            className="w-[37rem] h-fit"
          />
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1WfWgL6jatDaOm4jOPPUI4FIm1luHpora/view"
            target="_blank"
          >
            <div className="bg-white-80 text-black py-3 px-5 rounded-3xl font-sans hover:bg-blue-400 hover:border-white transition duration-200 flex items-center w-fit gap-1 border-neutral-400 border">
              <div>See full publication here.</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <g data-name="Layer 2">
                  <g data-name="diagonal-arrow-right-up">
                    <rect
                      width="24"
                      height="24"
                      transform="rotate(180 12 12)"
                      opacity="0"
                    />
                    <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z" />
                  </g>
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </ProjectPage>
  );
}
