"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: any) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const flareSize = isPointer ? 50 : 30;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`cursor ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    ></div>
  );
};

export default CustomCursor;

//It is more performant to translate instead of using:
// style={{
//   top: `${cursorPosition.y}px`,
//   left: `${cursorPosition.x}px`,
// }}

//https://blog.stackademic.com/how-to-create-custom-cursor-in-nextjs-13-no-extra-packages-060369a736c9
