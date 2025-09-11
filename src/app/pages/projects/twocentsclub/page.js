import ProjectPage from "@/app/components/ProjectPage";

export default function FatheadPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/tcc.webp"
      headerImageAlt="Two Cents Club header"
      title="TWO CENTS CLUB"
      description={[
        "What if your city was a campus? Two Cents Club is a community platform that helps young adults discover local, personalized experiences to learn new skills and connect with others.",
      ]}
      role="Founding Designer & Artistic Director"
      timeline="Ongoing (in-development)"
      disciplines={["Graphic Design", "Publication Design", "Brand"]}
    >
      <div className="space-y-6">
        <div>
          <a href="https://thetwocents.club/" target="_blank">
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
        </div>
      </div>
    </ProjectPage>
  );
}
