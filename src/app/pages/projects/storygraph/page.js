import CaseStudy from "@/app/components/CaseStudy";
import TextWithImage from "@/app/components/TextWithImage";
import CenteredImageWithCaption from "@/app/components/CenteredImageWithCaption";

export default function StoryGraphPage() {
  return (
    <CaseStudy
      headerImage="/images/projects/storygraph.webp"
      headerImageAlt="The StoryGraph project header"
      title="THE STORY GRAPH"
      description={[
        "The StoryGraph is a beloved book-tracking platform with 4M+ users and the leading alternative to Goodreads. My role was to revamp the platform’s interface and user experience — bringing polish, clarity, and accessibility — all while respecting the constraints of their one-woman dev team.",
      ]}
      role="Contract UX Designer"
      timeline="August 2024 - April 2025"
      disciplines={["UI/UX Design", "User Research", "Design Systems"]}
    >
      {/* Background Section */}
      <section id="background" data-section-title="Background">
        <TextWithImage
          title="BACKGROUND: FROM USER TO OFFICIAL DESIGNER"
          imgSrc="/images/projects/storygraph/roadmap.webp"
          imgAlt="Roadmap"
        >
          Before joining as a designer, I was an avid StoryGraph fan myself. I
          admired their mission and community spirit, but also became
          immediately familiarized with{" "}
          <span className="font-bold text-teal-700">friction points</span>{" "}
          first-hand. <br />
          <br />
          Seeing that design improvements were already a major goal in their
          roadmap, I decided to dive into researching to try my hand at fixing
          some of the issues.
        </TextWithImage>
      </section>

      {/* Research Section */}
      <section id="research" data-section-title="Research">
        <CenteredImageWithCaption
          imgSrc="/images/projects/storygraph/research.webp"
          imgAlt="Research"
          caption="The StoryGraph is known for its large, highly-active online communities—I studied countless discussions across their subreddit, forums, and TikTok/YouTube reviews."
        />
      </section>

      {/* Navigation Section */}
      <section id="navigation" data-section-title="Navigation">
        <CenteredImageWithCaption
          imgSrc="/images/projects/storygraph/navigation.webp"
          imgAlt="Navigation"
          caption="Annotated every page of the platform to identify pain points, then mapped user flows (revealing overnavigation)."
        />
      </section>

      {/* Pain Points Section */}
      <section id="painpoints" data-section-title="Pain Points">
        <CenteredImageWithCaption
          imgSrc="/images/projects/storygraph/painpoints.webp"
          imgAlt="Pain Points"
          caption="Consolidating insights from my research & 5 interviews with fellow users."
          title="PAIN POINTS"
        />
      </section>

      {/* Case Study Link */}
      <section id="casestudy-link" data-section-title="More Details">
        <div className="flex justify-center pt-8">
          <a
            href="https://accurate-camera-fa3.notion.site/The-StoryGraph-163d2970043580a2b3dccf6ca916812c?pvs=74"
            target="_blank"
          >
            <div className="bg-white-80 text-black py-3 px-5 rounded-3xl font-sans hover:bg-blue-400 hover:border-white transition duration-200 flex items-center w-fit gap-1 border-neutral-400 border">
              <span>
                Case Study currently being coded for this page! Click for more
                details.
              </span>
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
      </section>
    </CaseStudy>
  );
}
