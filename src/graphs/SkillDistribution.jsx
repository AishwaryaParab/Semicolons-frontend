import React from "react";

import ReactApexChart from "react-apexcharts";

const SkillDistribution = ({labels, series}) => {
  const chartOptions = {
    options: {
      chart: {
        type: "pie",
      },

      labels: labels,
    },

    series: series,
  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default SkillDistribution;
