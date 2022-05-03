import React from "react";
import { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";

function Chart({ data, country }) {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData(); //the return will be promise becoz it asyn funct
      setDailyData(dailyData);
    };
    // console.log(dailyData);
    fetchAPI();
  }, []);
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    ></Line>
  ) : null;

  const barchart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      option={{
        legends: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    >
      d
    </Bar>
  ) : null;
  return (
    <>
      <div className={styles.container}>{country ? barchart : lineChart}</div>
    </>
  );
}

export default Chart;
