"use client";

import Image from "next/image";

const ProjectPage = ({
  headerImage,
  headerImageAlt = "Project header",
  title,
  description,
  role,
  timeline,
  disciplines = [],
  children,
}) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mt-4 mb-8 mx-auto px-12 py-10 bg-white rounded-md drop-shadow-md animate-slidein opacity-0 [--slidein-delay:100ms]">
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-8 mb-10">
          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-5xl pt-2 font-franklin text-gray-900">
              {title}
            </h1>
            {description && (
              <div className="text-gray-700 font-sans text-md">
                {Array.isArray(description) ? (
                  description.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>{description}</p>
                )}
              </div>
            )}
            {/* Project Details */}
            <div className="flex gap-16 text-sm pt-4">
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
                  <div className="flex font-sans text-sm flex-col text-gray-900">
                    {disciplines.map((discipline, idx) => (
                      <span key={idx}>{discipline}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xl">
              <Image
                src={headerImage}
                alt={headerImageAlt}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        <hr />
        {/* Custom Content */}
        {children && <div className="pt-10">{children}</div>}
      </div>
    </div>
  );
};

export default ProjectPage;
