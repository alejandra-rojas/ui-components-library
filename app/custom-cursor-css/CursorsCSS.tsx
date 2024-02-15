"use client";
import { useEffect, useState } from "react";

function CursorsCSS() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <span
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) `,
      }}
      className="custom-cursor"
      aria-hidden="true"
    >
      <span className="contact">
        <span className="contact__text">Say hello</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
      <span className="preview">
        <span className="preview__img">
          <img src="https://images.unsplash.com/photo-1490049350474-498de43bc885?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1580501170888-80668882ca0c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </span>
      </span>
    </span>
  );
}

export default CursorsCSS;
