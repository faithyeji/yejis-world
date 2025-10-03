import React from "react";

export default function Callout({ children, rounded = "md", className = "" }) {
  const radiusClass =
    rounded === "full" ? "rounded-sm sm:rounded-full" : "rounded-md";

  return (
    <div
      className={`py-6 px-10 border border-gray-300 mt-2 ${radiusClass} ${className} font-sans text-center text-sm sm:text-base`}
    >
      {children}
    </div>
  );
}
