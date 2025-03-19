import React, { useState } from "react";

function B({show}) {
  const [val,setVal]=useState("")
  const [text,setText]=useState("")
  return <div>
    <h1> im B {show}</h1>
    <form action="">
    <select value={val} onChange={(e)=>{
      setVal(e.target.value)}}>
      <option value="1">val1</option>
      <option value="2">bal2</option>
      <option value="3">fal3</option>
    </select>
    <button onClick={(e)=>{
      e.preventDefault()
      console.log(e.target.form)
      setText(e.target.form[0].selectedOptions[0].text)}}>SHOW!</button>
    <h2>{text}</h2>
    </form>
    </div>
}

export default B;
