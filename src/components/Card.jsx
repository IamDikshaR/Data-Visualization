import React from "react";

const Card = () => {
  const content = [
    {
      1: {
        title: "Choose your Chart",
        desc: "Select the type of chart you want to create based on your dataset. We offer a variety of chart types to choose from",
      },
      2: {
        title: "Input Data",
        desc: " Input your data into the provided table interface. You will have to manually input your data",
      },
      3: {
        title: "Create your chart",
        desc: "Preview your chart to ensure it accurately represents your data. Once satisfied with your chart, export it as an image file",
      },
    },
  ];

  return (
    <>
      <div className="mx-8 flex flex-col justify-evenly sm:flex-row gap-4">
        {content.map((object) =>
          Object.entries(object).map(([key, value]) => (
            <div
              key={key}
              className="px-8 py-4 flex flex-col items-center justify-evenly border-2 border-slate-500 rounded-lg max-w-96 min-h-40"
            >
              <h2 className="text-color-1 font-bold">{value.title}</h2>
              <p className="text-center">{value.desc}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Card;
