import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <>
      <A />
      <B show={<A />} />
    </>
  );
}

export default App;
