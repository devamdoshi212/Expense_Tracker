import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const datapointsValue = props.datapoints.map((data) => data.value);
  const maxValue = Math.max(...datapointsValue);
  return (
    <div className="chart">
      {props.datapoints.map((data) => (
        <ChartBar
          value={data.value}
          key={data.label}
          label={data.label}
          maxvalue={maxValue}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
