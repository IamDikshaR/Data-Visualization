import React, { useState } from "react";
import DataTable from "./DataTable";
import Table from "./Table";
import CreateGraph from "./CreateGraph";

const Types = () => {
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

  return (
    <>
      <div className="flex gap-2 m-4 flex-wrap justify-center">
        {typesOfCharts.map((string, index) => (
          <button
            className="border-2 border-black rounded text-center p-2 min-w-40 hover:bg-black hover:text-white"
            key={index}
            onClick={() => setGraph(typesOfCharts[index] + "Chart")}
          >
            {string} Chart
          </button>
        ))}
      </div>
      <DataTable type={graph} />
      <Table type={graph} />
      {/* <div>{graph}</div> */}
    </>
  );
};

export default Types;
