"use client";
import { useCallback, useEffect, useRef, useState } from "react";

function Cursors() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredText, setHoveredText] = useState("");
  const [width, setWidth] = useState(0);
  const cursorTextRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    let elements: NodeListOf<HTMLElement> =
      document.querySelectorAll("[data-hover]");

    const onMouseEnter = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      const hoverText = targetElement.getAttribute("data-hover") || "";
      setHoveredText(hoverText);
      if (cursorTextRef.current) {
        cursorTextRef.current.style.opacity = "1";
      }
    };
    const onMouseLeave = () => {
      setHoveredText("");
      if (cursorTextRef.current) {
        cursorTextRef.current.style.opacity = "0";
      }
    };

    //console.log("Node list:", elements);

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, []);

  useEffect(() => {
    if (cursorTextRef.current) {
      const cursorTextWidth = cursorTextRef.current.offsetWidth;
      //console.log("Cursor Text Width:", cursorTextWidth);

      setWidth(cursorTextWidth);
    }
  }, [hoveredText]);

  return (
    <div
      style={{
        transform: `translate(${cursorPosition.x - (width + 22) / 2}px, ${
          cursorPosition.y
        }px)`,
        width: `${width}px`,
      }}
      className={`cursor`}
    >
      <div className={"cursor-container"}>
        <span className="cursor-text" ref={cursorTextRef}>
          {hoveredText}
        </span>
      </div>
    </div>
  );
}

export default Cursors;
