"use client";

import Image from "next/image";
import { useLoading } from "./LoadingContext";

export default function LoadingOverlay() {
  const { isLoading } = useLoading();

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8f8f8] transition-opacity duration-500 ease-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/images/googly-loading.gif"
        alt="Loading..."
        width={80}
        height={80}
        className="object-contain drop-shadow-sm"
      />
    </div>
  );
}
