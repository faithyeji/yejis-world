import CaseStudy from "@/app/components/CaseStudy";
import TextWithImage from "@/app/components/TextWithMedia";
import CenteredImageWithCaption from "@/app/components/CenteredImageWithCaption";
import Image from "next/image";

export default function ClimateCentsPage() {
  return (
    <CaseStudy
      headerImage="/images/projects/climate.jpg"
      headerImageAlt="Climate Cents header"
      title="CLIMATE CENTS"
      description={[
        "I led a team of 8 to develop an interactive map and backend integrating real-time weather data, making Blue Sky LA’s climate projects visible, searchable, and engaging for the public.",
      ]}
      role={["Project Lead"]}
      timeline="2024 - 2025"
      disciplines={[
        "Art Direction",
        "UI/UX Design",
        "Frontend Development",
        "Design/Dev Handoff",
      ]}
    >
      {/* Background Section */}
      <section id="background" data-section-title="Background">
        <TextWithImage
          title="BACKGROUND"
          mediaSrc="/images/projects/climate/background.webp"
          mediaAlt="Climate Cents Overview"
        >
          Climate Cents is a non-profit driving ecosystem restoration, carbon
          sequestration, and community-led climate resilience through education
          and local action. <br />
          <br />
          They created the initiative{" "}
          <span className="font-bold text-blue-600">Blue Sky LA</span> in
          partnership with Breathe Southern California to improve LA’s air
          quality ahead of the 2028 Olympics.
        </TextWithImage>
      </section>

      {/* Problem Section */}
      <section id="problem" data-section-title="The Problem">
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/problem.webp"
          imgAlt="Problem"
          caption="Blue Sky LA organizes volunteer climate projects—but without a clear way to visualize them, it was hard for the community to discover, understand, or get involved."
          title="WHAT ARE WE SOLVING?"
        />
      </section>

      {/* Callout Section */}
      <section id="callout" data-section-title="HOW CAN WE...">
        <div className="flex justify-center flex-col items-center mt-8">
          <div className="py-6 px-10 border rounded-full border-gray-300 text-center w-4/5 font-sans">
            <div className="font-mono text-gray-500 uppercase mb-2">
              Code the Change x Climate Cents
            </div>
            How can a team of 8 student designers and developers create an
            engaging, interactive way for the LA community to stay informed and
            involved with Blue Sky LA’s projects?
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section id="concepts" data-section-title="Concepts">
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/moodboard.webp"
          imgAlt="Moodboard"
          caption="Early explorations for visual language, tone, and interaction style. Our client was a big fan of the cleanliness of platforms like Apple Maps!"
        />
      </section>

      {/* Design Section */}
      <section id="designs" data-section-title="Designs" className="space-y-8">
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/lowfi-map.webp"
          imgAlt="Low Fidelity Map"
          caption="Mapping out how local projects could be visualized geographically."
        />
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/lowfi-card.webp"
          imgAlt="Low Fidelity Card"
          caption="Simple project cards showing core info like type, location, and completion status."
        />
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/midfi-map.webp"
          imgAlt="Mid Fidelity Map"
          caption="Refined map interface with filters, clustering, and hover states."
        />
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/midfi-card.webp"
          imgAlt="Mid Fidelity Card"
          caption="Project cards enriched with metadata and visual hierarchy. Thinking through ways to visualize multiple projects in the same location."
        />
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/hifi.webp"
          imgAlt="Hi Fi"
          caption="Adding dark mode, backend admin interface, polished UI, refined modal approach."
        />
      </section>

      {/* Branding Section */}
      <section id="branding" data-section-title="Brand Identity">
        <CenteredImageWithCaption
          imgSrc="/images/projects/climate/brand.webp"
          imgAlt="Brand Identity"
          title="BRAND IDENTITY"
          caption="A clean, intuitive visual system that prioritizes accessibility."
        />
      </section>

      <section id="finaldemo" data-section-title="Live Demo">
        <div className="flex justify-center flex-col items-center">
          <h1 className="w-full text-center mt-10 mb-8 font-mono text-xl text-gray-500 uppercase">
            LIVE BUILD
          </h1>
          <div className="py-6 px-10 border rounded-full border-gray-300 text-center w-4/5 font-sans">
            From there, I led design to developer handoff directly to ensure
            both visual details weren't lost and new interactions were added —
            including motion in project clustering, an idea submission callout
            that links to an internal form, live heat map overlays, and a
            simpler map without buildings.
          </div>
          <video
            className="h-auto w-full rounded-lg object-cover transition ease-out mt-8"
            src="/images/projects/climatecents.webm"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* Learnings Section */}
      <section id="learnings" data-section-title="Learnings">
        <div className="flex flex-col align-middle items-center">
          <h1 className="w-full text-center mt-2 mb-8 font-mono text-xl text-gray-500 uppercase">
            LEARNINGS
          </h1>
          <ul className="list-decimal list-inside space-y-4 text-left font-sans w-5/6">
            <li>
              <strong>Thoughtful interactions elevate simple builds.</strong>
              <br />
              Even small, well-considered interactions can keep users engaged
              and informed, reinforcing Blue Sky LA’s community-driven mission.
            </li>
            <li>
              <strong>Think big and explore first, then scale down.</strong>
              <br />
              Early ideation (even ambitious ideas that didn't make it into the
              final product like a fully 3D map) still shaped our approach and
              ultimately led to more engaging designs.
            </li>
            <li>
              <strong>
                Ease of use in nonprofit work always takes priority.
              </strong>
              <br /> Our work showed that in nonprofit design, clarity must come
              first. Prioritizing accessibility and simplicity ensures the
              platform empowers rather than overwhelms.
            </li>
            <li>
              <strong>Bridging design and development.</strong>
              <br /> I resolved gaps by organizing directly communication and
              feedback sessions between my developers and designers, and even
              worked within the code myself to polish UI more closely to our
              mockups.
            </li>
          </ul>
        </div>
      </section>
    </CaseStudy>
  );
}
