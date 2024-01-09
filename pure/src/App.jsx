import { useState } from "react";
import "./App.css";
import SimpleCounter from "./components/Simplecounter";
import PureCounter from "./components/Purecounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SimpleCounter />
      <PureCounter />
    </>
  );
}

export default App;
