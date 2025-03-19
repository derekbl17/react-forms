import React, { useState } from "react";
import B from "./B"
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
      <B show={text}/>
    </div>
  );
}

export default A;
