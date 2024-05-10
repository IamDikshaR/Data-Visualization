import React from "react";
import Card from "./Card";

const Instructions = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-xl font-bold sm:text-3xl">
          How does it Work?
        </h1>
        <Card />
      </div>
    </>
  );
};

export default Instructions;
