import ProjectPage from "@/app/components/ProjectPage";

export default function LumenPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/lumen.webp"
      headerImageAlt="Lumen project header"
      title="LUMEN"
      description={[
        "Lumen is an AI-powered platform designed to consolidate scattered user feedback across the web into actionable insights. It was built in Lavalab (USC’s premier 8-week startup incubator) and awarded “Best Demo.”",
      ]}
      role="Founding Designer"
      timeline="2024"
      disciplines={["Brand", "Motion", "Pitch Decks"]}
    >
      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap justify-between space-y-8">
            <video
              className="h-60 w-full rounded-lg object-cover transition ease-out"
              src="/images/projects/lumenclips/highlight.webm"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="flex flex-col gap-10 w-[38%]">
              <video
                className="h-fit rounded-lg object-cover transition ease-out"
                src="/images/projects/lumenclips/miss.webm"
                autoPlay
                muted
                loop
                playsInline
              />
              <video
                className="h-fit rounded-lg object-cover transition ease-out"
                src="/images/projects/lumenclips/break.webm"
                autoPlay
                muted
                loop
                playsInline
              />
              <video
                className="h-fit rounded-lg object-cover transition ease-out"
                src="/images/projects/lumenclips/3insights.webm"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="flex flex-col gap-14 w-7/12">
              <video
                className="h-fit rounded-lg object-cover transition ease-out"
                src="/images/projects/lumenclips/features.webm"
                autoPlay
                muted
                loop
                playsInline
              />
              <video
                className="h-[24.5rem] w-fit rounded-lg object-cover transition ease-out"
                src="/images/projects/lumenclips/spotlight.webm"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <a
            href="https://accurate-camera-fa3.notion.site/Lumen-164d2970043580df97e8eb670fe641cd"
            target="_blank"
          >
            <div className="bg-white-80 text-black py-3 px-5 rounded-3xl font-sans hover:bg-blue-400 hover:border-white transition duration-200 flex items-center w-fit gap-1 border-neutral-400 border mt-8">
              <div>Click to learn more!</div>
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
          {/* <h3 className="font-mono text-sm text-gray-500 uppercase mb-2">
            Process
          </h3>
          <p className="text-gray-700 font-sans text-md">Blah Blah Blah</p> */}
        </div>
      </div>
    </ProjectPage>
  );
}
