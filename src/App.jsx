import { useState, useRef } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Instructions from "./components/Instructions";
import Types from "./components/Types";
import Create from "./components/Create";

function App() {
  const target = useRef(null);
  const [show, setShow] = useState(false);
  return (
    <>
      <Header show={show} setShow={setShow} target={target} />
      <div className="flex flex-col justify-evenly sm:h-screen">
        <Intro />
        <Instructions />
      </div>
      <Create show={show} setShow={setShow} target={target} />
      {show && (
        <div ref={target}>
          <Types />
        </div>
      )}
    </>
  );
}

export default App;
