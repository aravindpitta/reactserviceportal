import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...dataPointValues)
  
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  )
};

export default Chart;
