import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { AiFillAmazonCircle, AiFillAliwangwang  } from "react-icons/ai";

const Charts = () => {
  const marksChart = [
    { id: 1, name: "Alice", math: 45, english: 78, physics: 90,},
    { id: 2, name: "Bob", math: 92, english: 11, physics: 84},
    { id: 3, name: "Charlie", math: 25, english: 33, physics: 82 },
    { id: 4, name: "David", math: 88, english: 66, physics: 79},
    { id: 5, name: "Eva", math: 13, english: 45, physics: 87},
    { id: 6, name: "Mohit", math: 94, english: 70, physics: 87},
  ];


  return (
    <div className="p-8">
      <LineChart width={600} height={400} data={marksChart}>
        <Line dataKey={'math'} type={"monotone"} stroke="#219ebc"></Line>
        <Line dataKey={'english'} type={"monotone"} stroke="#fb8500"></Line>

        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <CartesianGrid strokeDasharray={'5'}></CartesianGrid>
        <Tooltip></Tooltip>

      </LineChart>
    </div>
  );
};

export default Charts;
