import CaseStudy from "@/app/components/CaseStudy";
import TextWithImage from "@/app/components/TextWithMedia";
import CenteredImageWithCaption from "@/app/components/CenteredImageWithCaption";
import Callout from "@/app/components/Callout";
import Image from "next/image";

export default function TwoCentsClubPage() {
  return (
    <CaseStudy
      headerImage="/images/projects/tcc/landing.webp"
      headerImageAlt="Two Cents Club project header"
      title="TWO CENTS CLUB"
      description={[
        "Two Cents Club is a community platform that helps post-graduate adults discover local, personalized experiences to learn new skills and connect with others. As the founding designer, my role was to craft 2CC's brand identity and interactions to make the product whimsically fun.",
      ]}
      role={["Co-Founder", "Lead Brand & Product"]}
      timeline="Summer 2025 (June–August)"
      disciplines={[
        "Brand",
        "Interaction",
        "Community",
        "Graphic Design",
        "Visual Storytelling",
      ]}
    >
      {/* Background */}
      <section id="background" data-section-title="Background">
        <TextWithImage
          title="BACKGROUND"
          mediaSrc="/images/projects/tcc/welcometcc.webp"
          mediaAlt="Overview of Two Cents Club"
        >
          Two Cents Club started from a desire to recreate the curiosity-driven
          community adults lose after graduating college.
          <br />
          <br />
          As a founding member in a team of 4, my focus was on leading brand and
          design — to make every interaction feel playful, welcoming, and part
          of a cohesive world, while also building a community beyond users.
        </TextWithImage>
      </section>
      <section
        id="problem"
        data-section-title="THE PROBLEM"
        className="flex justify-center flex-col align-middle items-center mt-2"
      >
        <h1 className="w-full text-center mt-4 sm:mt-10 mb-10 font-mono text-xl text-gray-500 uppercase">
          THE PROBLEM
        </h1>
        <div className="flex flex-wrap gap-8 items-start justify-center mb-12">
          <Image
            src="/images/projects/tcc/problem1.webp"
            alt="Problem"
            width={2000}
            height={2000}
            quality={100}
            className="w-[45rem] h-fit rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/tcc/problem2.webp"
            alt="Existing Solutions"
            width={2000}
            height={2000}
            quality={100}
            className="w-[45rem] h-fit rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/tcc/question.webp"
            alt="How Can We"
            width={2000}
            height={1800}
            quality={100}
            className="w-[45rem] h-fit rounded-lg"
            priority
          />
        </div>
      </section>
      <div className="pb-8">
        <h1 className="w-full text-center font-mono text-xl text-gray-500 uppercase">
          THE SOLUTION:
        </h1>
        <CenteredImageWithCaption
          imgSrc="/images/projects/tcc/jointheclub.webp"
          imgAlt="Join the Club"
          caption="A platform connecting community members to local classes and enabling
        anyone to teach, blending playful digital tools with in-person
        workshops that foster real connection."
        ></CenteredImageWithCaption>
      </div>

      <Callout>
        The questions that guided my design for creating a product that was both
        online and in-person: <br />
        <br />
        <ul>
          <li>
            How do we make this feel universal but not like a tech company?
          </li>
          <li>How do we add whimsy and fun without undermining credibility?</li>
          <li>
            How do we highlight individuality within a modular community
            structure?
          </li>
        </ul>
      </Callout>
      {/* Brand Philosophy */}
      <section id="brand" data-section-title="Brand Philosophy">
        <TextWithImage
          title="BRAND PHILOSOPHY"
          mediaSrc="/images/projects/tcc/subway.webp"
          mediaAlt="Brand elements including typography and doodles"
          mediaPosition="left"
        >
          Core principles shaped every choice:
          <ul className="pl-4 mt-2 mb-4 list-disc">
            <li>
              <strong>Childlike whimsy:</strong> bouncy motion, googly eyes,
              doodles.
            </li>
            <li>
              <strong>Human-first:</strong> teachers and hosts feel like
              friends, rather than pros.
            </li>
            <li>
              <strong>Modular yet personal:</strong> stickers, collages,
              interactive details.
            </li>
            <li>
              <strong>Accessible, approachable typography:</strong> a bold and
              rounded sans serif make the tone friendly and open.
            </li>
            <li>
              <strong>Playful yet polished</strong> — never pretentious.
            </li>
          </ul>
          The goal: immerse members in curiosity and community, where every
          detail builds ritual, joy, and belonging.
        </TextWithImage>
      </section>
      {/* Host / Branding Graphics */}
      <section id="hosts" data-section-title="Hosts & Graphics">
        <CenteredImageWithCaption
          imgSrc="/images/projects/tcc/punchcard.webp"
          imgAlt="Punchcard for hosts"
          caption="Graphics for hosts, including punchcard stickers received after workshops, templates, and identity elements to make interactions playful and personalized to each person."
        />
        <div className="flex flex-wrap gap-6 justify-center mt-20">
          <Image
            src="/images/projects/tcc/ethan.webp"
            alt="Ethan Host Graphic"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/images/projects/tcc/elizabeth.webp"
            alt="Elizabeth Host Graphic"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/images/projects/tcc/elizabeth2.webp"
            alt="Elizabeth Host Graphic 2"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
      {/* Community Touchpoints */}
      <section id="touchpoints" data-section-title="Community Touchpoints">
        <CenteredImageWithCaption
          imgSrc="/images/projects/tcc/slack.webp"
          imgAlt="Slack workspace with branded channels"
          caption="Even small details like themed internal Slack channels could reinforce our brand and ritual in all digital touchpoints!"
        />
        <div className="mt-14">
          <Callout rounded="full">
            Every interaction — digital or physical — helps members feel
            immersed in the silly, child-like world of Two Cents.
          </Callout>
        </div>
      </section>
      {/* Outcomes */}
      <section id="outcomes" data-section-title="Outcomes & Pilots">
        <CenteredImageWithCaption
          title="OUTCOMES + PILOT WORKSHOPS/PRODUCT"
          imgSrc="/images/projects/tcc/outcomes.webp"
          imgAlt="Workshop outcomes and community stats"
          caption="50+ active members within 3 months, with 71% retention. So far, we've hosted a candle-making workshop, 8 weeks of a writing workshop, and a 4-week Philosophy of Physics course!"
        />
        <div className="flex flex-wrap gap-6 mt-20 justify-center">
          <video
            src="/images/projects/tcc/tcc.webm"
            autoPlay
            muted
            loop
            playsInline
            className="h-96 w-72 object-fit"
          />
          <Image
            src="/images/projects/tcc/candles.webp"
            alt="Candles Workshop"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/images/projects/tcc/candles2.webp"
            alt="Candles Workshop"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/images/projects/tcc/candles3.webp"
            alt="Candles Workshop"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/images/projects/tcc/candles4.webp"
            alt="Candles Workshop"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Reflection */}
      <section id="reflection" data-section-title="Reflection">
        <CenteredImageWithCaption
          imgSrc="/images/projects/tcc/brainstorm.webp"
          imgAlt="Reflections"
          caption="Two Cents Club showed me that brand shapes experience everywhere—from
          Slack to workshops. Whimsy, stickers, and playful interactions make
          adults safe to explore, create, and connect, transforming routine
          learning into a ritualized, immersive community."
        />
      </section>
    </CaseStudy>
  );
}
