import React, { useRef, useEffect } from "react";

const Header = ({ show, setShow, target }) => {
  const handleClick = () => {
    setShow(true);
  };
  useEffect(() => {
    if (show) {
      target.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [show]);
  return (
    <>
      <div className="flex items-center justify-between min-h-12 bg-white border-b border-slate-400 px-4">
        <div className="flex items-center gap-2">
          <img src="./public/Icon.svg" alt="icon" className="w-8 h-8" />
          <h1 className="text-lg font-bold">Charts.make</h1>
        </div>
        <button
          className="bg-color-1 text-white min-w-28 min-h-8 rounded-lg"
          onClick={handleClick}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default Header;
