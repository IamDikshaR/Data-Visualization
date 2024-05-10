import React, { useRef, useEffect, useState } from "react";
import Table from "./Table";
import CreateGraph from "./CreateGraph";

const Types = () => {
  const table = useRef(null);
  const [graph, setGraph] = useState("");
  const typesOfCharts = [
    "Line",
    "Bar",
    "Column",
    "Area",
    "Stepped-Area",
    "Bubble",
    "Pie",
    "Donut",
    "Combo",
    "CandleStick",
    "Scatter",
  ];

  useEffect(() => {
    if (graph) {
      table.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [graph]);

  return (
    <>
      <h2 className="text-xl font-bold border-b-2 border-color-3  p-2 px-4 text-center">
        Choose the type of chart you want
      </h2>
      <div className="flex gap-2 m-4 flex-wrap justify-center">
        {typesOfCharts.map((string, index) => (
          <button
            className="border-2 border-black rounded text-center p-2 min-w-40 hover:bg-color-4 hover:text-white hover:border-color-4"
            key={index}
            onClick={() => setGraph(typesOfCharts[index] + "Chart")}
          >
            {string} Chart
          </button>
        ))}
      </div>
      <div ref={table}>{graph && <Table type={graph} />}</div>
    </>
  );
};

export default Types;
