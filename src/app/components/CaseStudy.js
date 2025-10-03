"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudy = ({
  headerImage,
  headerImageAlt = "Project header",
  title,
  description,
  role = [],
  timeline,
  disciplines = [],
  children,
}) => {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll("[data-section-title]")
    );
    setSections(
      sectionElements.map((el) => ({
        id: el.id,
        title: el.getAttribute("data-section-title"),
      }))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -90% 0px", threshold: 0 }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [children]);

  return (
    <div className="min-h-screen">
      <div className="flex mt-8">
        {/* Table of Contents */}
        <aside className="hidden lg:block sticky top-32 lg:left-[11%] h-fit w-[8rem] flex-shrink-0 self-start animate-slidein opacity-0 [--slidein-delay:200ms]">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/#projects"
              className="text-gray-600 hover:text-blue-600 font-mono text-sm uppercase"
            >
              ← Back
            </Link>
          </div>
          <h2 className="font-franklin text-4xl text-black uppercase mb-4 leading-8">
            {title}
          </h2>
          <ul className="space-y-2">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className={`font-mono uppercase text-sm transition-all duration-300 inline-block ${
                    activeId === sec.id
                      ? "text-blue-600 translate-x-2"
                      : "text-gray-700"
                  }`}
                >
                  {activeId === sec.id && "— "} {/* dash inherits color */}
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex justify-center max-w-4xl mx-auto min-h-screen">
          {/* Header Section */}
          <div className="bg-white rounded-md drop-shadow-md pt-10 pb-12 px-20 animate-slidein opacity-0 [--slidein-delay:100ms] mb-20">
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
            <div className="flex flex-wrap justify-center gap-10 sm:gap-20 text-sm pt-4 mt-8">
              {role && role.length > 0 && (
                <div>
                  <div className="font-mono text-md text-gray-500 uppercase mb-1">
                    Role
                  </div>
                  <div className="text-gray-900 font-sans flex flex-col">
                    {role.map((d, idx) => (
                      <span key={idx}>{d}</span>
                    ))}
                  </div>
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
            <div className="space-y-16 flex flex-col justify-center items-center align-middle">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CaseStudy;
