import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./ScoreChart.css";

function ScoreChart({ score }) {
  const data = [{ name: "completed", value: score, fill: "#FF0101" }];

  return (
    <div className="score-chart">
      <PieChart width={258} height={263}>
        <Pie
          data={data}
          title="test"
          startAngle={90}
          endAngle={90 + score * 360}
          innerRadius={70}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          <Cell fill="#FF0000" cornerRadius="50%" />
        </Pie>
      </PieChart>
      <div className="score-content">
        <p className="percentage">{score * 100}%</p>
        <p className="legend">
          de votre
          <br />
          objectif
        </p>
      </div>
    </div>
  );
}
export default ScoreChart;
