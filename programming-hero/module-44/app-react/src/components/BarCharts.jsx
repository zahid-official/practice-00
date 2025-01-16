import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const BarCharts = () => {
  const marksChart = [
    { id: 1, name: "Alice", math: 85, english: 78, physics: 90 },
    { id: 2, name: "Bob", math: 92, english: 88, physics: 84 },
    { id: 3, name: "Charlie", math: 76, english: 85, physics: 82 },
    { id: 4, name: "David", math: 88, english: 90, physics: 79 },
    { id: 5, name: "Eva", math: 95, english: 80, physics: 87 },
  ];

  return (
    <div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={700}
          height={500}
          data={marksChart}
          margin={{ top: 100, left: 100 }}
        >
          <CartesianGrid strokeDasharray={5}></CartesianGrid>
          <Bar dataKey={"math"} fill="#8884d8"></Bar>
          <Bar dataKey={"english"} fill="#82ca9d"></Bar>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default BarCharts;
