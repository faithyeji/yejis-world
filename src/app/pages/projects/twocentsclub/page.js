import CaseStudy from "@/app/components/CaseStudy";
import Image from "next/image";

export default function TwoCentsPage() {
  return (
    <CaseStudy
      headerImage="/images/projects/tcc/tccslide.webp"
      headerImageAlt="Two Cents Club header"
      title="TWO CENTS CLUB"
      description={[
        "What if your city was a campus? Two Cents Club is a community platform that helps young, post-graduate adults discover local, personalized experiences to learn new skills and connect with others.",
      ]}
      role={["Founding Designer", "Art Director"]}
      timeline="Ongoing (in-development)"
      disciplines={["Graphic Design", "Brand", "Product", "UI/UX"]}
    >
      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <video
              className="h-full w-40 rounded-lg object-cover transition ease-out"
              src="/images/projects/tcc/tcc.webm"
              autoPlay
              muted
              loop
              playsInline
            />
            <Image
              src="/images/projects/tcc/subway.webp"
              alt="2cc subway"
              width={1000}
              height={800}
              priority
              className="rounded-lg w-96 h-fit"
            />
            <Image
              src="/images/projects/tcc/candles.webp"
              alt="candles"
              width={1000}
              height={800}
              priority
              className="rounded-lg w-56 h-fit"
            />
            <Image
              src="/images/projects/tcc/ethan.webp"
              alt="ethan"
              width={1000}
              height={800}
              priority
              className="rounded-lg w-56 h-fit"
            />
            <Image
              src="/images/projects/tcc/elizabeth.webp"
              alt="elizabeth"
              width={1000}
              height={800}
              priority
              className="rounded-lg w-56 h-fit"
            />
            <Image
              src="/images/projects/tcc/welcometcc.webp"
              alt="welcome"
              width={1000}
              height={800}
              priority
              className="rounded-lg w-80 h-fit"
            />
          </div>

          <a href="https://thetwocents.club/" target="_blank">
            <div className="bg-white-80 text-black py-3 px-5 rounded-3xl font-sans hover:bg-blue-400 hover:border-white transition duration-200 flex items-center w-fit gap-1 border-neutral-400 border mt-8">
              <div>
                This project is currently being built! Click for more details.
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
    </CaseStudy>
  );
}
