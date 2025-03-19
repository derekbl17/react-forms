import React, { useState } from "react";

export const CompA = ({ handleShowColor }) => {
  const [check, setCheck] = useState(false);
  const colorBtn = (data) => {
    handleShowColor(check);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={check}
        onChange={() => setCheck((prev) => !prev)}
      />
      <button onClick={handleShowColor}>click</button>
    </div>
  );
};
