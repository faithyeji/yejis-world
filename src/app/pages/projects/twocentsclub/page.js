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
        "Two Cents Club is a community platform that helps young, post-graduate adults discover local, personalized experiences to learn new skills and connect with others. As the founding designer, my role was to craft its brand, identity, and interactions to make the product whimsically fun.",
      ]}
      role={["Co-Founder, Brand & Product Designer"]}
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
            className="w-fit h-[17.5rem] rounded-lg mb-8"
            priority
          />
          <Image
            src="/images/projects/tcc/problem2.webp"
            alt="Existing Solutions"
            width={2000}
            height={2000}
            quality={100}
            className="w-fit h-[17.5rem] rounded-lg mb-8"
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
      <h1 className="w-full text-center mt-4 sm:mt-10 font-mono text-xl text-gray-500 uppercase">
        THE SOLUTION:
      </h1>
      <Image
        src="/images/projects/tcc/jointheclub.webp"
        alt="Join The Club"
        width={800}
        height={300}
        className="rounded-lg"
      />
      <Callout>
        The questions that guided my design for creating a product that was both
        online and in-person: <br />
        <br />
        How do we make this feel universal but not like a tech company? How do
        we add whimsy and fun without undermining credibility? How do we
        highlight individuality within a modular community structure?
      </Callout>
      {/* Brand Philosophy */}
      <section id="brand" data-section-title="Brand Philosophy">
        <TextWithImage
          title="BRAND PHILOSOPHY"
          mediaSrc="/images/projects/tcc/subway.webp"
          mediaAlt="Brand elements including typography and doodles"
          mediaPosition="left"
        >
          Core principles guided every decision:
          <ul className="pl-4 mt-2 mb-4 list-disc">
            <li>
              Childlike whimsy: bouncy motion, googly eyes, doodles,
              annotations.
            </li>
            <li>
              Friendly human-first approach: teachers and hosts feel like
              friends.
            </li>
            <li>
              Modular but personal: stickers, collages, interactive elements for
              customization.
            </li>
            <li>
              Accessible and approachable typography: NEUE MONTREAL Bold for
              headings, Medium for body text.
            </li>
            <li>Avoid pretension: playful yet polished for adult audiences.</li>
          </ul>
          The goal: **transport members into a world of curiosity and
          community**, where every touchpoint reinforces ritual, fun, and
          belonging.
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
          caption="Slack channels like #homeroom, #recess, #book-club, and #app-updates reinforced brand and ritual in all digital touchpoints."
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
          caption="50+ active members within 3 months, with 71% retention Month 2, 54% Month 3. So far, we've hosted a candle-making workshop, 8 weeks of a writing workshop, and a 4-week Philosophy of Physics course!"
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
