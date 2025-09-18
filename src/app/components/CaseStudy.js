"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CaseStudy = ({
  headerImage,
  headerImageAlt = "Project header",
  title,
  description,
  role,
  timeline,
  disciplines = [],
  children,
}) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // All direct children with data-section-title
    const sectionElements = Array.from(
      document.querySelectorAll("[data-section-title]")
    );
    setSections(
      sectionElements.map((el) => ({
        id: el.id,
        title: el.getAttribute("data-section-title"),
      }))
    );
  }, [children]);

  return (
    <div className="min-h-screen">
      <div className="flex mt-8">
        {/* Table of Contents */}
        <aside className="hidden lg:block sticky top-32 left-44 h-fit w-[8rem] flex-shrink-0 self-start animate-slidein opacity-0 [--slidein-delay:200ms]">
          <h2 className="font-franklin text-4xl text-black uppercase mb-4 leading-8">
            {title}
          </h2>
          <ul className="space-y-2">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-gray-700 hover:text-teal-700 font-mono uppercase text-sm"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex justify-center max-w-4xl mx-auto min-h-screen">
          {/* Header Section */}
          <div className="bg-white rounded-md drop-shadow-md py-16 px-20 animate-slidein opacity-0 [--slidein-delay:100ms]">
            {description && (
              <div className="text-gray-700 font-sans text-center text-md mt-4 mx-4 sm:mx-20">
                {Array.isArray(description)
                  ? description.map((p, i) => (
                      <p key={i} className="mb-4">
                        {p}
                      </p>
                    ))
                  : description}
              </div>
            )}
            <div className="flex justify-center w-full mt-6">
              <div className="h-auto">
                <Image
                  src={headerImage}
                  alt={headerImageAlt}
                  width={1000}
                  height={800}
                  priority
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-wrap justify-center gap-20 text-sm pt-4 mt-8">
              {role && (
                <div>
                  <div className="font-mono text-md text-gray-500 uppercase mb-1">
                    Role
                  </div>
                  <div className="text-gray-900 font-sans">{role}</div>
                </div>
              )}
              {timeline && (
                <div>
                  <div className="font-mono text-md text-gray-500 uppercase mb-1">
                    Timeline
                  </div>
                  <div className="text-gray-900 font-sans">{timeline}</div>
                </div>
              )}
              {disciplines.length > 0 && (
                <div>
                  <div className="font-mono text-md text-gray-500 uppercase mb-1">
                    Skills
                  </div>
                  <div className="flex flex-col font-sans text-gray-900 text-sm">
                    {disciplines.map((d, idx) => (
                      <span key={idx}>{d}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <hr className="my-12" />
            {/* Children sections */}
            <div className="space-y-16">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CaseStudy;
