import React from "react";
import { useEffect } from "react";

const Create = ({ show, setShow, target }) => {
  const handleClick = () => {
    setShow(true);
  };
  useEffect(() => {
    if (show) {
      target.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [show]);
  return (
    <div className="mt-2 mb-8 flex justify-center">
      <button
        className="bg-color-2 text-white min-w-40 min-h-14 rounded-lg"
        onClick={handleClick}
      >
        Start creating
      </button>
    </div>
  );
};

export default Create;
