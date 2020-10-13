import React from "react";
const Arrow = () => {
  return (
    <svg width="200" height="200">
      <defs>
        <marker
          id="markerArrow1"
          markerWidth="13"
          markerHeight="13"
          refX="2"
          refY="6"
          orient="auto"
        >
          <path d="M2,2 L2,11 L10,6 L2,2" />
        </marker>
      </defs>
      <line
        x1="151"
        y1="97"
        x2="110"
        y2="100"
        style={{stroke:"#006600", markerEnd: "url(#markerArrow1)"}}
      />
    </svg>
  );
};

export default Arrow;
