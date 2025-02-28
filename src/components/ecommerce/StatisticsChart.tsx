import { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import ChartTab from "../common/ChartTab";

interface Props {
  title: string;
  series?: { name: string; data: number[] }[];
}

export default function StatisticsChart({ title }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<"daily" | "monthly" | "annually">("daily");

  // Data for different filters
  const seriesData = {
    daily: [{ name: "Clients", data: [10, 25, 20, 35, 40, 30, 45] }],
    monthly: [{ name: "Clients", data: [100, 210, 214, 216, 216, 225, 220, 205, 230, 210, 240, 235] }],
    annually: [{ name: "Clients", data: [1200, 1400, 1300, 1500, 1600, 1700, 1650, 1550, 1750, 1800, 1900, 2000] }],
  };

  const categoriesData = {
    daily: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    monthly: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    annually: ["2015","2016","2017","2018","2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  };

  const options: ApexOptions = {
    legend: { show: false, position: "top", horizontalAlign: "left" },
    colors: ["#5CB338", "#9CB9FF"],
    chart: { fontFamily: "Outfit, sans-serif", height: 310, type: "line", toolbar: { show: false } },
    stroke: { curve: "straight", width: [2, 2] },
    fill: { type: "gradient", gradient: { opacityFrom: 0.55, opacityTo: 0 } },
    markers: { size: 0, strokeColors: "#fff", strokeWidth: 2, hover: { size: 6 } },
    grid: { xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } } },
    dataLabels: { enabled: false },
    tooltip: { enabled: true, x: { format: "dd MMM yyyy" } },
    xaxis: {
      type: "category",
      categories: categoriesData[selectedFilter],
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: { style: { fontSize: "12px", colors: ["#6B7280"] } },
      title: { text: "", style: { fontSize: "0px" } },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">{title}</h3>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <ChartTab selected={selectedFilter} onChange={setSelectedFilter} />
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1000px] xl:min-w-full">
          <Chart options={options} series={seriesData[selectedFilter]} type="area" height={310} />
        </div>
      </div>
    </div>
  );
}
