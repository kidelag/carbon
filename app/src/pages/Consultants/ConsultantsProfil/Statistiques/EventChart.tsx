import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface Event {
  startDate: Date;
}

interface EventChartProps {
  challenges: Event[];
  formations: Event[];
}

const EventChart: React.FC<EventChartProps> = ({ challenges, formations }) => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: any[];
  }>({ labels: [], datasets: [] });

  useEffect(() => {
    // Process the challenges data to group by month and count the number of challenges done

    let processedChallengeData: any = {};
    if (challenges.length > 0) {
      processedChallengeData = challenges.reduce((acc: any, challenge) => {
        const month = new Date(challenge.startDate).getMonth();
        acc[month] = acc[month] ? acc[month] + 1 : 1;
        return acc;
      }, {});
    }

    let processedFormationData: any = {};

    if (formations.length > 0) {
      const test = new Date(formations[0].startDate);
      console.log(test.getMonth());
      processedFormationData = formations.reduce((acc: any, formation) => {
        const month = new Date(formation.startDate).getMonth();
        acc[month] = acc[month] ? acc[month] + 1 : 1;
        return acc;
      }, {});
    }

    // Prepare the chart data for challenges
    const challengeLabels = Object.keys(processedChallengeData).map((month) => {
      return new Date(0, Number(month)).toLocaleString("default", {
        month: "long",
      });
    });
    const challengeData = Object.values(processedChallengeData);

    // Prepare the chart data for formations
    const formationLabels = Object.keys(processedFormationData).map((month) => {
      return new Date(0, Number(month)).toLocaleString("default", {
        month: "long",
      });
    });
    const formationData = Object.values(processedFormationData);

    // Set the chart data
    setChartData({
      labels: formationLabels.length > 0 ? formationLabels : challengeLabels, // Use challenge labels for the x-axis
      datasets: [
        {
          label: "Challenges terminés",
          data: challengeData,
          fill: false,
          borderColor: "blue",
          tension: 0.4,
        },
        {
          label: "Formations terminées",
          data: formationData,
          fill: false,
          borderColor: "red",
          tension: 0.4,
        },
      ],
    });
  }, [challenges, formations]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Nombre de challenges et formations terminés par mois",
      },
    },
  };

  console.log("chartData", chartData);
  return (
    <div style={{ width: "500px", height: "300px" }}>
      {chartData.datasets.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default EventChart;
