import React, { useState, useEffect, useRef } from "react";

const CreateGraph = ({ tableData, rowIndex, colIndex, type }) => {
  const chart_div = useRef(null);

  useEffect(() => {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // var data = new google.visualization.DataTable();
      // for (let i = 0; i < colIndex; i++) {
      //   i == 0
      //     ? data.addColumn("string", tableData[0][0])
      //     : data.addColumn("number", tableData[0][i]);
      // }
      for (let i = 1; i < rowIndex; i++) {
        for (let j = 1; j < colIndex; j++) {
          tableData[i][j] = parseInt(tableData[i][j]);
        }
      }

      // for (let i = 1; i < rowIndex; i++) {
      //   console.log(tableData[i]);
      //   data.addRow(tableData[i]);
      // }
      var data = google.visualization.arrayToDataTable(tableData);

      var options;

      const renderLine = () => {
        console.log("Line chart");
        var chart = new google.visualization.LineChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderBar = () => {
        console.log("Bar chart");
        var chart = new google.visualization.BarChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderColumn = () => {
        console.log("Column chart");
        var chart = new google.visualization.ColumnChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderArea = () => {
        console.log("Area chart");
        var chart = new google.visualization.AreaChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderStepped = () => {
        console.log("Stepped Area chart");
        var chart = new google.visualization.SteppedAreaChart(
          chart_div.current
        );
        chart.draw(data, options);
      };
      const renderBubble = () => {
        console.log("Bubble chart");
        options = { bubble: { textStyle: { fontSize: 11 } } };
        var chart = new google.visualization.BubbleChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderPie = () => {
        console.log("Pie chart");
        var chart = new google.visualization.PieChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderDonut = () => {
        console.log("Donut chart");
        options = { pieHole: 0.4 };
        var chart = new google.visualization.PieChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderCombo = () => {
        console.log("Combo chart");
        options = {
          seriesType: "bars",
          series: { 5: { type: "line" } },
        };
        var chart = new google.visualization.ComboChart(chart_div.current);
        chart.draw(data, options);
      };
      const renderCandleStick = () => {
        console.log("CandleStick chart");
        var chart = new google.visualization.CandlestickChart(
          chart_div.current
        );
        chart.draw(data, options);
      };
      const renderScatter = () => {
        console.log("Scatter chart");
        var chart = new google.visualization.ScatterChart(chart_div.current);
        chart.draw(data, options);
      };

      const render = () => {
        switch (type) {
          case "LineChart":
            renderLine();
            break;
          case "BarChart":
            renderBar();
            break;
          case "ColumnChart":
            renderColumn();
            break;
          case "AreaChart":
            renderArea();
            break;
          case "Stepped-AreaChart":
            renderStepped();
            break;
          case "BubbleChart":
            renderBubble();
            break;
          case "PieChart":
            renderPie();
            break;
          case "DonutChart":
            renderDonut();
            break;
          case "ComboChart":
            renderCombo();
            break;
          case "CandleStickChart":
            renderCandleStick();
            break;
          case "ScatterChart":
            renderScatter();
            break;
        }
      };

      render();
    }
  }, []);

  return (
    <>
      <div ref={chart_div} className="mb-8"></div>
    </>
  );
};

export default CreateGraph;
