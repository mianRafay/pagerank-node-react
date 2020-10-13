import React from "react";
import "./style.css";
class Circle extends React.Component {
  render() {
    return (
      <div className="left" width="75%">
        <svg width="100%" height="100%">
          {this.props.links.map((value, key) => {
            return (
              <>
                {" "}
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
                  x1={value.x1 - 3}
                  y1={value.y1 - 3}
                  x2={value.x2 - 8}
                  y2={value.y2 - 3}
                  style={{
                    stroke: "#006600",
                    strokeWidth: "1px",
                    markerEnd: "url(#markerArrow1)",
                  }}
                />
              </>
            );
          })}

          {this.props.nodes.map((value, key) => {
            return (
              <>
                <circle
                  key={key}
                  className="cspace"
                  id={value.name}
                  cx={value.x}
                  cy={value.y}
                  r="10"
                />
                <text
                  x={value.x + 10}
                  y={value.y - 30}
                  textAnchor="middle"
                  stroke="black"
                  strokeWidth="1px"
                >
                  {value.name}
                </text>
              </>
            );
          })}
        </svg>
      </div>
    );
  }
}

export default Circle;
