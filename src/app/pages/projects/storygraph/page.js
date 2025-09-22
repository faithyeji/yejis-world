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
      <section
        id="process"
        data-section-title="PROCESS"
        className="flex justify-center flex-col align-middle items-center mt-2"
      >
        <h1 className="w-full text-center mt-10 mb-10 font-mono text-xl text-gray-500 uppercase">
          THE PROCESS
        </h1>
        <div className="flex flex-wrap gap-8 items-start justify-center">
          <Image
            src="/images/projects/storygraph/1.webp"
            alt="Step 1"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-[17.5rem] rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/storygraph/2.webp"
            alt="Step 2"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-[17.5rem] rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/storygraph/3.webp"
            alt="Step 2"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-[17.5rem] rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/storygraph/4.webp"
            alt="Step 2"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-[17.5rem] rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/storygraph/5.webp"
            alt="Step 2"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-[17.5rem] rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/storygraph/6.webp"
            alt="Step 2"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-[17.5rem] rounded-lg mb-8"
            priority
          />
        </div>

        <div className="font-sans text-center w-4/5 mt-20 mb-10">
          <div className="py-6 px-10 border rounded-full border-gray-300 mt-2">
            Following this process I developed to best suit their one-developer
            team and constraints, I...
          </div>
        </div>

        <TextWithImage
          mediaSrc="/images/projects/storygraph/designsystem.webp"
          mediaAlt="Design System"
          mediaPosition="left"
        >
          <div className="pb-20">
            Developed a robust design system covering:
            <div className="pl-4 mt-2 mb-4">
              <li>
                Responsive layouts and font sizing for desktop, tablet, & mobile
                screens.
              </li>
              <li>Consistent light and dark mode colors.</li>
              <li>
                Reusable component library (buttons, inputs, cards) covering a
                variety of completion states.
              </li>
              <li>WCAG 2.2 accessibility-first guidelines.</li>
            </div>
          </div>
        </TextWithImage>

        <TextWithImage
          mediaSrc="/images/projects/storygraph/designsystem.webp"
          mediaAlt="Design System"
        >
          <div className="pb-20">
            Maintained detailed notes on my rationale behind design decisions,
            accessibility considerations, and interactions like hover states.
            Clear documentation streamlined collaboration for our tiny team
            serving millions and reduced handoff friction.
          </div>
        </TextWithImage>

        <TextWithImage
          mediaSrc="/images/projects/storygraph/designsystem.webp"
          mediaAlt="Design System"
          mediaPosition="left"
        >
          <div className="pb-20">
            Completed shipped updates of TSG's existing pages with focused
            design improvements, rather than rebuilding from scratch. Each
            redesign emphasized readability, discoverability, and visual polish.
          </div>
        </TextWithImage>
      </section>

      <hr className="border-t-1 border-gray-300 my-12 w-full" />

      <div className="font-sans text-center w-4/5 mt-20 mb-10">
        <div className="py-6 px-10 border rounded-full border-gray-300 mt-2">
          Ultimately, this led to shipped, iterative page revamps — a refresh
          the entire app's pages with focused design improvements rather than
          rebuilding from scratch. Each redesign emphasized readability,
          discoverability, ease-of-development, and visual polish.
        </div>
      </div>
      <section id="outcomes" data-section-title="OUTCOMES">
        <CenteredImageWithCaption
          title="OUTCOMES"
          imgSrc="/images/projects/storygraph/work1.webp"
          imgAlt="Work 1"
        />
        <CenteredImageWithCaption
          imgSrc="/images/projects/storygraph/work2.webp"
          imgAlt="Work 2"
        />
      </section>

      {/* Learnings Section */}
      <section id="learnings" data-section-title="Learnings">
        <div className="flex flex-col align-middle items-center mb-12">
          <h1 className="w-full text-center mt-2 mb-8 font-mono text-xl text-gray-500 uppercase">
            LEARNINGS
          </h1>
          <ul className="list-decimal list-inside space-y-4 text-left font-sans w-5/6">
            <li>
              <strong>Making design modular is hard, but rewarding.</strong>
              <br />
              The best design adapts to the diverse inputs users put in.
            </li>
            <li>
              <strong>
                Talk with your founders and user as often as you can.
              </strong>
              <br />
              They reveal overlooked details and edge cases I wouldn’t have
              thought of alone.
            </li>
            <li>
              <strong>Color is powerful, even in subtle ways.</strong>
              <br /> Simple choices, like using teal for inputs/CTAs and black
              for text gave the design overall much more cohesion.
            </li>
            <li>
              <strong>
                Sometimes, the most “visually” appealing choice isn’t always
                best.
              </strong>
              <br /> Certain design choices like omitting repetitive text looked
              cleaner, but user testing revealed it to be less accessible.
            </li>
            <li>
              <strong>There will always be design–dev discrepancies.</strong>
              <br /> The key, however, is working closely with developers to
              minimize them.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center ">
          <Image
            src="/images/projects/storygraph/covermore.webp"
            alt="Cover More"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-60 rounded-lg mb-8"
            priority
          />
        </div>
      </section>
      {/* Case Study Link
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
      </section> */}
    </CaseStudy>
  );
}
