import React from "react";

export const CompB = ({ displayColor }) => {
  return (
    <div>
      <div className="cube" style={{ backgroundColor: displayColor }}></div>
    </div>
  );
};
