import React, { useState, useEffect, useRef } from "react";
import CreateGraph from "./CreateGraph";

const Table = ({ type }) => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(2);
  const [tableData, setTableData] = useState([]);
  const [graph, showGraph] = useState(false);
  const create = useRef(null);

  const handleRowChange = (e) => {
    const newRowValue = parseInt(e.target.value);
    setRows(newRowValue > 0 ? newRowValue : 1);
  };

  const handleColumnChange = (e) => {
    const newColumnValue = parseInt(e.target.value);
    setColumns(newColumnValue > 0 ? newColumnValue : 1);
  };

  const handleCellChange = (e, rowIndex, colIndex) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = e.target.value;
    setTableData(newData);
  };

  const createInitialTableData = () => {
    const initialData = [];
    for (let i = 0; i < rows; i++) {
      const rowData = [];
      for (let j = 0; j < columns; j++) {
        rowData.push("");
      }
      initialData.push(rowData);
    }
    setTableData(initialData);
  };

  useEffect(() => {
    createInitialTableData();
  }, [rows, columns]);

  const handleSubmit = () => {
    console.log("Submitting table data:", tableData);
    showGraph(true);
  };

  useEffect(() => {
    if (graph) {
      create.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [graph]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl rounded-md p-2 px-4 min-w-80 text-center text-white bg-color-3">
        Create {type} Table
      </h2>
      <div className="m-2">
        <label htmlFor="rows" className="mx-2">
          Number of Rows =
        </label>
        <input
          type="number"
          className="max-w-20 pl-2 border border-black"
          id="rows"
          value={rows}
          onChange={handleRowChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="columns" className="mx-2">
          Number of Columns =
        </label>
        <input
          type="number"
          className="max-w-20 pl-2 border border-black"
          id="columns"
          value={columns}
          onChange={handleColumnChange}
        />
      </div>
      <table className="m-4">
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, colIndex) => (
                <td key={colIndex}>
                  <input
                    className={
                      rowIndex == 0
                        ? "border-1 bg-color-4 text-white p-1 pl-2 rounded max-w-24"
                        : "border-1 bg-color-4/[0.2] p-1 pl-2 rounded max-w-24"
                    }
                    type="text"
                    value={cellData}
                    onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="submit"
        className="border border-slate-500 rounded-md px-2 py-1 mb-4 text-center hover:bg-color-4 hover:border-none hover:text-white"
        onClick={handleSubmit}
      >
        Create Graph 📈
      </button>
      <div ref={create}>
        {graph && (
          <CreateGraph
            tableData={tableData}
            rowIndex={rows}
            colIndex={columns}
            type={type}
          />
        )}
      </div>
    </div>
  );
};

export default Table;
