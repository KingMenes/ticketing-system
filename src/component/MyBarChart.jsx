import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Tickets from "../tickets.json";

function priorityCounts() {
  const lowCount = Tickets.reduce(
    (acc, cur) => (cur.priority === "Low" ? ++acc : acc),
    0
  );
  const medCount = Tickets.reduce(
    (acc, cur) => (cur.priority === "Medium" ? ++acc : acc),
    0
  );
  const highCount = Tickets.reduce(
    (acc, cur) => (cur.priority === "High" ? ++acc : acc),
    0
  );
  return [lowCount, medCount, highCount];
}

function MyBarChart() {
  const data = [
    {
      name: "Low",
      amount: priorityCounts()[0],
    },
    {
      name: "Medium",
      amount: priorityCounts()[1],
    },
    {
      name: "High",
      amount: priorityCounts()[2],
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#70bbc2" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default MyBarChart;
