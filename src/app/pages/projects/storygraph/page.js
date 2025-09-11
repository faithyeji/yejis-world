import ProjectPage from "@/app/components/ProjectPage";

export default function StoryGraphPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/storygraph.webp"
      headerImageAlt="The StoryGraph project header"
      title="THE STORYGRAPH"
      description={[
        "The StoryGraph is a book-sharing platform with over 3 million users, where readers connect through shared interests, recommendations, and social features. As the sole UX designer, I worked on creating intuitive experiences that make discovering new books a collaborative journey.",
      ]}
      role="Sole UX Designer"
      timeline="2023"
      disciplines={["UI/UX Design", "User Research", "Design Systems"]}
    >
      <div className="space-y-6">
        <div>
          <div>
            <a
              href="https://accurate-camera-fa3.notion.site/The-StoryGraph-163d2970043580a2b3dccf6ca916812c?pvs=74"
              target="_blank"
            >
              <div className="bg-white-80 text-black py-3 px-5 rounded-3xl font-sans hover:bg-blue-400 hover:border-white transition duration-200 flex items-center w-fit gap-1 border-neutral-400 border">
                <div>
                  Case Study currently being coded for this page! Click for more
                  details.
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
            {/* <h3 className="font-mono text-sm text-gray-500 uppercase mb-2">
            Process
          </h3>
          <p className="text-gray-700 font-sans text-md">Blah Blah Blah</p> */}
          </div>
        </div>
      </div>
    </ProjectPage>
  );
}
