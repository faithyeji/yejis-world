import ProjectPage from "@/app/components/ProjectPage";
import Image from "next/image";

export default function WabiPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/wabi.webp"
      headerImageAlt="Wabi project header"
      title="WABI"
      description={[
        <>
          Leading art direction, copy, and designs of static content for
          Wabi&apos;s social media{" "}
          <a
            href="https://www.instagram.com/joinwabi"
            target="_blank"
            className="underline hover:text-blue-500 transition-colors"
          >
            @joinwabi
          </a>{" "}
          and experiential campaigns!
        </>,
      ]}
      role={["Contract Brand Designer"]}
      // timeline="TBD"
      disciplines={["Graphic Design", "Brand", "Copywriting", ""]}
    >
      <div className="space-y-16 font-sans">
        {/* Welcome & ID Card */}
        <div className="space-y-6 flex flex-wrap">
          <Image
            src="/images/projects/wabi/Welcome.webp"
            alt="Welcome to Wabi"
            width={800}
            height={300}
            className="w-1/2 h-auto"
          />
          <Image
            src="/images/projects/wabi/Card.webp"
            alt="Wabi Identification Card"
            width={800}
            height={300}
            className="w-1/2 h-auto"
          />
          <Image
            src="/images/projects/wabi/Prompt.webp"
            alt="Prompt 1"
            width={960}
            height={1200}
            className="w-1/2 h-auto"
          />
          <Image
            src="/images/projects/wabi/Prompt2.webp"
            alt="Prompt 2"
            width={960}
            height={1200}
            className="w-1/2 h-auto"
          />
        </div>

        {/* Jake series */}
        <div className="grid grid-cols-3 gap-3">
          <Image
            src="/images/projects/wabi/Jake1.webp"
            alt="Jake 1"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/Jake2.webp"
            alt="Jake 2"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/Jake3.webp"
            alt="Jake 3"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
        </div>

        {/* What If series */}
        <div className="grid grid-cols-3 gap-3">
          <Image
            src="/images/projects/wabi/WhatIf1.webp"
            alt="What If 1"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/WhatIf2.webp"
            alt="What If 2"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/WhatIf3.webp"
            alt="What If 3"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/WhatIf4.webp"
            alt="What If 4"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/WhatIf5.webp"
            alt="What If 5"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/WhatIf6.webp"
            alt="What If 6"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
        </div>

        {/* Vibe Coding series */}
        <div className="grid grid-cols-3 gap-3">
          <Image
            src="/images/projects/wabi/VibeCoding1.webp"
            alt="Vibe Coding 1"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/VibeCoding2.webp"
            alt="Vibe Coding 2"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/VibeCoding3.webp"
            alt="Vibe Coding 3"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
        </div>

        {/* Prompt, Save Your Relationship, Wingman, New Skool */}
        <div className="grid grid-cols-3 gap-3 ">
          <Image
            src="/images/projects/wabi/SaveYourRelationship.webp"
            alt="Save Your Relationship 1"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/SaveYourRelationship2.webp"
            alt="Save Your Relationship 2"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/Wingman.webp"
            alt="Wingman"
            width={960}
            height={1200}
            className="w-full h-auto"
          />
          <Image
            src="/images/projects/wabi/NewSkool.webp"
            alt="New Skool"
            width={960}
            height={1200}
            className="w-full h-auto col-start-2"
          />
        </div>
      </div>
    </ProjectPage>
  );
}
