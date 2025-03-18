import React, { useState } from "react";

function A() {
  const [inputVal, setInputVal] = useState("");
  const [text, setText] = useState(inputVal);
  return (
    <div>
      <input
        id="in"
        value={inputVal}
        type="text"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          setText(inputVal);
        }}
      >
        show
      </button>
      <h1>{text}</h1>
    </div>
  );
}

export default A;
