import React from "react";

const Intro = () => {
  return (
    <div className="m-4 flex flex-col items-center gap-4 justify-center">
      <h1 className="text-center text-xl font-bold sm:text-4xl">
        What is Charts.make?
      </h1>
      <p className="text-center text-md sm:text-lg w-2/3">
        <span className="text-color-1">
          <b className="underline underline-offset-4">
            Welcome to Charts.make!{" "}
          </b>
          Where insights come to life. <br /> With Charts.make, your data
          becomes the canvas for your story.
          <br />
        </span>
        <span className="text-color-2">
          From trends to patterns, our tool transforms your data into dynamic
          visualizations, empowering you to tell your story with clarity and
          impact. Say goodbye to static spreadsheets and hello to interactive
          exploration.
        </span>
      </p>
    </div>
  );
};

export default Intro;
