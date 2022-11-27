import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto"; //미사용하지만 안적어주면 오류남
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ],
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 2,
      data: [1, 2, 3, 6, 8, 3, 6, 8, 9, 10],
      yAxisID: "y_sub",
    },
    {
      type: "line",
      label: "Dataset 2",
      backgroundColor: "rgb(255, 99, 132)",
      data: [2, 5, 1, 4, 7, 2, 5, 3, 7, 8],
      borderColor: "red",
      borderWidth: 2,
    },
    {
      type: "line",
      label: "Dataset 3",
      backgroundColor: "rgb(75, 192, 192)",
      data: [3, 2, 7, 5, 2, 4, 1, 3, 6, 8],
      yAxisID: "y_sub",
      borderColor: "green",
      borderWidth: 2,
    },
  ],
};

const options = {
  spanGaps: true,
  grouped: true,
  interaction: {
    mode: "index",
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true, // 상단
        padding: 10,
        font: {
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(124, 35, 35, 0.4)",
      padding: 10,
      bodySpacing: 5,
      bodyFont: {
        font: {
          family: "'Noto Sans KR', sans-serif",
        },
      },
      usePointStyle: true,
      filter: (item) => item.parsed.y !== null,
      // callbacks: {
      //   title: (context) => context[0].label + "💙",
      //   label: (context) => {
      //     let label = context.dataset.label + "" || "";

      //     return context.parsed.y !== null
      //       ? label + ": " + context.parsed.y + "배"
      //       : null;
      //   },
      // },
    },
  },
  scales: {
    x: {
      // afterTickToLabelConversion: function (scaleInstance) {
      //   const ticks = scaleInstance.ticks;

      //   const newTicks = ticks.map((tick) => {
      //     return {
      //       ...tick,
      //       label: tick.label + "🎵",
      //     };
      //   });

      //   scaleInstance.ticks = newTicks;
      // },
      grid: {
        display: false,
        tickLength: 4,
        color: "#E2E2E230",
      },
      axis: "x",
      position: "bottom",
      ticks: {
        minRotation: 45,
        padding: 5,
      },
    },
    y: {
      type: "linear",
      grid: {
        color: "#E2E2E230",
      },
      afterDataLimits: (scale) => {
        scale.max = scale.max * 1.2;
      },
      axis: "y",
      display: true,
      position: "left",
      title: {
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        // text: "단위: 배",
      },
    },
    y_sub: {
      position: "right",
      title: {
        display: true,
        align: "end",
        color: "#808080",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "단위: 배",
      },
      afterDataLimits: (scale) => {
        scale.max = scale.max * 1.2;
      },
    },
  },
};

const ChartEx = () => {
  return (
    <Container>
      <Line type="line" data={data} options={options} />
    </Container>
  );
};

export default ChartEx;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;
