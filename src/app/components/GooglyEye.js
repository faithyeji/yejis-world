import React, { useEffect, useRef } from "react";
import "./googly.css";

export default function GooglyEye() {
  const pupilsRef = useRef([]);

  useEffect(() => {
    // Initialize pupils positions
    const pupils = document.querySelectorAll(".pupil");
    pupilsRef.current = Array.from(pupils);

    pupilsRef.current.forEach((pupil) => {
      const offset = pupil.getBoundingClientRect();
      pupil.centerX = offset.left + offset.width / 2;
      pupil.centerY = offset.bottom + offset.height / 2;
    });

    // Handler function for mouse/touch movement
    const handleMovement = (e) => {
      let mouseX;
      let mouseY;

      if ("targetTouches" in e && e.targetTouches[0]) {
        e.preventDefault();
        mouseX = e.targetTouches[0].pageX;
        mouseY = e.targetTouches[0].pageY;
      } else {
        const mouseEvent = e;
        mouseX = mouseEvent.clientX + window.scrollX;
        mouseY = mouseEvent.clientY + window.scrollY;
      }

      pupilsRef.current.forEach((pupil) => {
        pupil.radians = Math.atan2(
          mouseX - (pupil.centerX || 0),
          mouseY - (pupil.centerY || 0)
        );
        pupil.degree = pupil.radians * (180 / Math.PI) * -1;
        pupil.style.transform = `rotate(${(pupil.degree || 0) + 180}deg)`;
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMovement);
    window.addEventListener("touchstart", handleMovement);
    window.addEventListener("touchmove", handleMovement);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMovement);
      window.removeEventListener("touchstart", handleMovement);
      window.removeEventListener("touchmove", handleMovement);
    };
  }, []);

  return (
    <div className="googly-container z-20">
      {/* Mobile googly */}
      <div className="googly-mobile block sm:hidden ml-2">
        <div className="pupil-mobile"></div>
        <div className="highlight"></div>
      </div>
      {/* Desktop googly */}
      <div className="googly hidden sm:block">
        <div className="pupil"></div>
        <div className="highlight"></div>
      </div>
    </div>
  );
}
