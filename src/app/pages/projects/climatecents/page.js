import ProjectPage from "@/app/components/ProjectPage";

export default function FatheadPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/climate.jpg"
      headerImageAlt="Climate Cents header"
      title="CLIMATE CENTS"
      description={[
        "I led a team of 8 to create an interactive map and backend of Blue Sky LA’s climate projects to make local action visible, searchable, and engaging.",
      ]}
      role="Project Lead"
      timeline="2024-2025"
      disciplines={["Art Direction", "UX Design", "Frontend Development"]}
    >
      <div className="space-y-6">
        <div>
          <a
            href="https://www.figma.com/proto/RuDfBtR4W1SO2kExfFLcKm/PORTFOLIO-DECKS?page-id=0%3A1&node-id=2001-1093&m=draw&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2001%3A1093&t=cunKSlrK0HuZkFps-14"
            target="_blank"
          >
            <div className="bg-white-80 text-black py-3 px-5 rounded-3xl font-sans hover:bg-blue-400 hover:border-white transition duration-200 flex items-center w-fit gap-1 border-neutral-400 border">
              <div>
                Case Study currently being constructed on this page! Click for
                more details.
              </div>
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
