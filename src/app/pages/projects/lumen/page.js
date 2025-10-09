import CaseStudy from "@/app/components/CaseStudy";
import TextWithImage from "@/app/components/TextWithMedia";
import CenteredImageWithCaption from "@/app/components/CenteredImageWithCaption";
import Image from "next/image";
import Callout from "@/app/components/Callout";

export default function LumenPage() {
  return (
    <CaseStudy
      headerImage="/images/projects/lumen.webp"
      headerImageAlt="Lumen project header"
      title="LUMEN"
      description={[
        "Lumen is an AI-powered platform that consolidates scattered user feedback into actionable insights. Built in LavaLab, USC’s premier startup incubator, it won Best Demo from a panel of judges.",
      ]}
      role={["Cofounder & Sole Designer"]}
      timeline="2024 (8-Week Sprint)"
      disciplines={["Brand", "Motion", "Pitch Decks", "Product Validation"]}
    >
      {/* Background Section */}
      <section id="background" data-section-title="Background">
        <TextWithImage
          title="BACKGROUND"
          mediaSrc="/images/projects/lumen/comments.webp"
          mediaAlt="Lumen Overview"
        >
          During my work on client-facing apps like The StoryGraph, I faced a
          common struggle: user feedback is <strong>everywhere</strong>. Social
          media, app store reviews, emails — it all can be a <em>mess</em> to
          sift through. <br />
          <br />
          Even just 2 StoryGraph Instagram posts contained 300+ comments with
          insightful feedback! This wasn't just my problem — my team had faced
          the same struggles firsthand at their own workplaces, whether that was
          at large companies or small startups.
        </TextWithImage>
      </section>
      {/* Problem Section */}
      <section id="problem" data-section-title="Problem" className="space-y-8">
        <video
          className="h-fit rounded-lg object-cover transition ease-out"
          src="/images/projects/lumen/miss.webm"
          autoPlay
          muted
          loop
          playsInline
          lazy="true"
        />
        <h1 className="w-full text-center font-mono text-xl text-gray-500 uppercase pt-16">
          THE PROBLEM
        </h1>
        <Callout rounded="full">
          <div>
            Critical insights are <strong>everywhere</strong> — scattered,
            unstructured, and time-consuming to consolidate. Our interviews with
            5 industry professionals confirmed this leads to wasted time, money,
            and resources.
          </div>
        </Callout>
      </section>
      {/* Concept Section */}
      <section id="concepts" data-section-title="Concepts">
        <CenteredImageWithCaption
          imgSrc="/images/projects/lumen/moodboard.webp"
          imgAlt="Moodboard"
          caption="In my early concepts, I explored ways to surface key insights quickly while keeping the
          interface simple and visually engaging. Branding quickly surfaced as a core aspect of what could differentiate our platform in making feedback consolidation more fun."
        />
      </section>
      {/* Solution Section */}
      <section
        id="solution"
        data-section-title="Our Solution"
        className="space-y-8 w-full"
      >
        <h1 className="text-center font-mono text-xl text-gray-500 uppercase pt-24">
          Our Solution
        </h1>
        <video
          className="h-60 w-full rounded-lg object-cover transition ease-out"
          src="/images/projects/lumen/highlight.webm"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* <Callout rounded="full">
          <div>
            Critical insights are <strong>everywhere</strong> — scattered,
            unstructured, and time-consuming to consolidate. Our interviews with
            5 industry professionals confirmed this leads to wasted time, money,
            and resources.
          </div>
        </Callout> */}
      </section>
      <section
        id="walkthrough"
        data-section-title="Walkthrough"
        className="space-y-8 w-full"
      >
        <h1 className="text-center font-mono text-xl text-gray-500 uppercase pt-24">
          Walkthrough
        </h1>
        <CenteredImageWithCaption
          imgSrc="/images/projects/lumen/moodboard.webp"
          imgAlt="Moodboard"
          caption="Lumen automatically scrapes the web and social media platforms like Instagram and X for relevant user feedback."
        ></CenteredImageWithCaption>
        {/* <TextWithImage
          mediaSrc="/images/projects/lumen/comments.webp"
          mediaAlt="Lumen Overview"
        >
          During my work on client-facing apps like The StoryGraph, I faced a
          common struggle: user feedback is <strong>everywhere</strong>. Social
          media, app store reviews, emails—it all can be a <em>mess</em> to sift
          through. <br />
          <br />
          Even just 2 StoryGraph Instagram posts contained 300+ comments with
          insightful feedback! This wasn't just my problem — my team had faced
          the same struggles firsthand at their own workplaces, whether that was
          at large companies or small startups.
        </TextWithImage> */}
      </section>
      {/* Motion Section */}
      <section id="motion" data-section-title="Motion & Storytelling">
        <div className="flex flex-wrap justify-between space-y-8">
          <div className="flex flex-col gap-10 w-[38%]">
            <video
              className="h-fit rounded-lg object-cover transition ease-out"
              src="/images/projects/lumen/break.webm"
              autoPlay
              muted
              loop
              playsInline
            />
            <video
              className="h-fit rounded-lg object-cover transition ease-out"
              src="/images/projects/lumen/3insights.webm"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="flex flex-col gap-14 w-7/12">
            <video
              className="h-fit rounded-lg object-cover transition ease-out"
              src="/images/projects/lumen/features.webm"
              autoPlay
              muted
              loop
              playsInline
            />
            <video
              className="h-[24.5rem] w-fit rounded-lg object-cover transition ease-out"
              src="/images/projects/lumen/spotlight.webm"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
        <div className="mt-10">
          <Callout rounded="full">
            Motion and animated storytelling were key to Lumen’s identity,
            bringing the platform and pitch decks to life!
          </Callout>
        </div>
      </section>
      {/* Solution Section
      <section id="solution" data-section-title="Solution">
        <CenteredImageWithCaption
          imgSrc="/images/projects/lumen/solution.webp"
          imgAlt="Solution"
          caption="Lumen organizes feedback across multiple channels into a unified platform, highlighting trends and insights for product teams."
          title="OUR SOLUTION"
        />
        <TextWithImage
          mediaSrc="/images/projects/lumen/dashboard.webp"
          mediaAlt="Platform Interface"
        >
          While my primary impact was **branding, motion, and storytelling**, I
          also contributed to **high-level product functionality**, including
          dashboards, insight organization, and a simplified user flow for early
          testers and judges.
        </TextWithImage>
      </section> */}
      {/* Outcomes Section */}
      {/* <section id="outcomes" data-section-title="Outcomes">
        <CenteredImageWithCaption
          title="OUTCOMES"
          imgSrc="/images/projects/lumen/outcomes.webp"
          imgAlt="Lumen Outcomes"
          caption="Lumen won Best Demo from LavaLab judges and validated its concept with early users. Qualitative outcomes included clear problem validation, strong brand identity, and compelling storytelling through motion and pitch decks."
        />
      </section> */}
      {/* Learnings Section */}
      <section id="learnings" data-section-title="Learnings">
        <div className="flex flex-col align-middle items-center">
          <h1 className="w-full text-center mt-2 mb-8 font-mono text-xl text-gray-500 uppercase">
            LEARNINGS
          </h1>
          <ul className="list-decimal list-inside space-y-4 text-left font-sans w-5/6">
            <li>
              <strong>Branding communicates functionality.</strong>
              <br />
              Strong motion and storytelling can make a platform feel real and
              usable, even before extensive UI/UX.
            </li>
            <li>
              <strong>Motion amplifies narrative.</strong>
              <br />
              Animations in pitch decks and demos engage audiences and
              communicate complex ideas clearly.
            </li>
            <li>
              <strong>Co-founder perspective is invaluable.</strong>
              <br />
              Leading design and validation provided insight into how branding,
              storytelling, and product intersect in early-stage startups.
            </li>
            <li>
              <strong>Qualitative validation matters.</strong>
              <br />
              Observing panel feedback, user reactions, and demo engagement
              helped iterate messaging and presentation more than UI
              refinements.
            </li>
          </ul>
        </div>
      </section>
    </CaseStudy>
  );
}
