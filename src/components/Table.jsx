import React, { useState, useEffect } from "react";
import CreateGraph from "./CreateGraph";

const Table = ({ type }) => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(2);
  const [tableData, setTableData] = useState([]);
  const [graph, showGraph] = useState(false);

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
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl border border-slate-500 rounded-md p-2 min-w-60 text-center text-white bg-black">
        Create Table
      </h2>
      <div className="m-2">
        <label htmlFor="rows" className="mx-2">
          Number of Rows ={" "}
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
          Number of Columns ={" "}
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
                        ? "border-1 bg-slate-600 text-white p-1 pl-2 rounded"
                        : "border-1 bg-slate-300 p-1 pl-2 rounded"
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
        className="border border-slate-500 rounded-md px-2 py-1 mb-4 text-center"
        onClick={handleSubmit}
      >
        Create Graph 📈
      </button>
      {graph && (
        <CreateGraph
          tableData={tableData}
          rowIndex={rows}
          colIndex={columns}
          type={type}
        />
      )}
    </div>
  );
};

export default Table;
