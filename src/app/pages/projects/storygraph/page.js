import CaseStudy from "@/app/components/CaseStudy";
import TextWithImage from "@/app/components/TextWithMedia";
import CenteredImageWithCaption from "@/app/components/CenteredImageWithCaption";
import Image from "next/image";

export default function StoryGraphPage() {
  return (
    <CaseStudy
      headerImage="/images/projects/storygraph.webp"
      headerImageAlt="The StoryGraph project header"
      title="THE STORY GRAPH"
      description={[
        "The StoryGraph is a beloved book-tracking platform with 4M+ users and the leading alternative to Goodreads. My role was to revamp the platform’s interface and user experience — bringing polish, clarity, and accessibility — all while respecting the constraints of their one-woman dev team.",
      ]}
      role={["Contract UX Designer"]}
      timeline="August 2024 - April 2025"
      disciplines={[
        "UI/UX Design",
        "User Research",
        "Design Systems,",
        "Brand",
      ]}
    >
      {/* Background Section */}
      <section id="background" data-section-title="Background">
        <TextWithImage
          title="BACKGROUND: FROM USER TO OFFICIAL DESIGNER"
          mediaSrc="/images/projects/storygraph/roadmap.webp"
          mediaAlt="Roadmap"
        >
          Before joining as a designer, I was an avid StoryGraph fan myself. I
          admired their mission and community spirit, but also became
          immediately familiarized with{" "}
          <span className="font-bold text-blue-600">friction points</span>{" "}
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
          caption="The StoryGraph is known for its large, highly-active online communities; I studied countless discussions across their subreddit, forums, and TikTok/YouTube reviews."
        />
        <CenteredImageWithCaption
          imgSrc="/images/projects/storygraph/navigation.webp"
          imgAlt="Navigation"
          caption="Annotated every page of the platform to identify pain points, then mapped user flows (revealing overnavigation)."
        />
      </section>

      {/* Pain Points Section */}
      <section
        id="painpoints"
        data-section-title="Pain Points"
        className="pt-4"
      >
        <CenteredImageWithCaption
          imgSrc="/images/projects/storygraph/painpoints.webp"
          imgAlt="Pain Points"
          caption="Consolidating insights from my research & 5 user interviews."
          title="PAIN POINTS"
        />
      </section>

      {/* Concept Section */}
      <section id="concept" data-section-title="V1: Concepts">
        <h1 className="w-full text-center mt-10 mb-10 font-mono text-xl text-gray-500 uppercase">
          PHASE 1: CONCEPT REDESIGN
        </h1>
        <TextWithImage
          mediaSrc="/images/projects/storygraph/concept.webm"
          mediaAlt="Concept"
          mediaPosition="left"
        >
          <div className="pb-10">
            I created proof-of-concept redesigns to test:
            <div className="pl-4 mt-2 mb-4">
              <li>Simplified flows, reducing unnecessary clicks.</li>
              <li>
                A touch of rebranding to feel warmer, less clinical, but still
                undeniably The StoryGraph.
              </li>
              <li>Added visual hierarchy to pages with lots of static text.</li>
            </div>
            This research and early concepts eventually led to my role as an{" "}
            <span className="underline">official contract designer</span> at The
            StoryGraph!
          </div>
        </TextWithImage>
      </section>

      <hr className="border-t-1 border-gray-300 my-12 w-full" />

      {/* Official Redesign Section */}
      <section
        id="official"
        data-section-title="V2: OFFICIAL"
        className="flex justify-center flex-col align-middle items-center mt-2"
      >
        <h1 className="w-full text-center mb-5 font-mono text-xl text-gray-500 uppercase">
          PHASE 2: OFFICIAL REDESIGN
        </h1>
        <div className="font-sans text-center w-4/5">
          <div className="py-6 px-10 border rounded-full border-gray-300 mt-2">
            <div>
              Now that I was officially designing for them, I had to ask myself:
            </div>
            <div className="mt-4">
              How could I revamp The StoryGraph’s experience by simplifying
              navigation, surfacing hidden features, and ensuring accessibility,
              while still respecting the limits of a one-woman dev team and
              avoiding a full system overhaul?
            </div>
          </div>
        </div>
        <Image
          src="/images/projects/storygraph/revamp.webp"
          alt="Revamp"
          width={3000}
          height={3000}
          quality={100}
          className="w-3/5 h-fit rounded-lg mt-8"
          priority
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
