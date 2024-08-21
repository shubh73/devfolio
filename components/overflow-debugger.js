"use client";

import React, { useEffect, useState } from "react";

export const OverflowDebugger = () => {
  const [overflowingElement, setOverflowingElement] = useState(null);

  useEffect(() => {
    const findOverflowingElement = () => {
      const allElements = document.getElementsByTagName("*");
      for (let element of allElements) {
        if (element.offsetWidth > document.documentElement.offsetWidth) {
          setOverflowingElement(element);
          element.style.outline = "5px solid red";
          break;
        }
      }
    };

    findOverflowingElement();
    window.addEventListener("resize", findOverflowingElement);

    return () => {
      window.removeEventListener("resize", findOverflowingElement);
      if (overflowingElement) {
        overflowingElement.style.outline = "";
      }
    };
  }, []);

  return overflowingElement ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "rgba(255,0,0,0.8)",
        color: "white",
        padding: "10px",
        zIndex: 9999,
      }}
    >
      {console.log({ overflowingElement })}
      Overflowing element: {overflowingElement.tagName}
      {overflowingElement.id && `#${overflowingElement.id}`}
      {overflowingElement.className &&
        `.${overflowingElement.className.split(" ").join(".")}`}
    </div>
  ) : null;
};
