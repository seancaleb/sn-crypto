import { useColorModeValue } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CoinPrice } from "../../../types";
import { tooltip, elements, yTicks, xTicks } from "./Chart.config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type ChartDataViewProps = {
  prices: CoinPrice[];
  symbol: string | undefined;
};

const ChartDataView = ({ prices, symbol }: ChartDataViewProps) => {
  const bg = useColorModeValue("rgba(216, 68, 83, 0.25)", "rgba(216, 68, 83, 0.1)");
  const bgTooltip = useColorModeValue("rgba(0,0,0,0.80)", "rgba(0,0,0,0.64)");

  const labels = prices.map((price) => price.date);
  const pricesList = prices.map((price) => price.price);

  const options = {
    aspectRatio: 2.5,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        ...tooltip,
        backgroundColor: bgTooltip,
      },
    },
    animations: {
      numbers: false,
    },
    interaction: {
      intersect: false,
    },
    elements,
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxis: {
        grid: {
          display: false,
          tickColor: "#89216B",
        },
        ticks: {
          ...xTicks,
          callback: (value: number, index: number) => {},
        },
      },
      yAxis: {
        position: "right",
        grid: {
          display: false,
        },
        ticks: {
          ...yTicks,
          callback: (value: number) => {
            const formattedValue = String(value.toLocaleString("en-US"));
            return `${symbol} ${formattedValue}`;
          },
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: `Price ${symbol}`,
        data: pricesList,
        borderColor: "#89216B",
        backgroundColor: bg,
        pointBackgroundColor: "#DA4453",
        pointHoverBackgroundColor: "#DA4453",
        fill: true,
      },
    ],
  };

  return <Line options={options as any} data={data} />;
};

export default ChartDataView;
