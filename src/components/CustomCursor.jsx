// CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (followerRef.current) {
        followerRef.current.animate(
          {
            transform: `translate3d(${x - 10}px, ${y - 10}px, 0)`,
          },
          {
            duration: 300,
            fill: "forwards",
            easing: "ease-out",
          }
        );
      }
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Follower (trails behind) */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full bg-sky-400 opacity-30 pointer-events-none transition-transform duration-300 ease-out`}
      ></div>

      {/* Core cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full ${
          hovering ? "bg-white scale-150" : "bg-white"
        } pointer-events-none transition-transform duration-150 ease-out`}
      ></div>
    </>
  );
}
