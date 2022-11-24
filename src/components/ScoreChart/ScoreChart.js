import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";
import "./ScoreChart.css";

function ScoreChart({ score }) {
  const pieData = [{ name: "completed", value: score, fillColor: "#FF0101" }];

  return (
    <div className="score-chart charts">
      <PieChart width={258} height={263}>
        <circle cx={130} cy={135} r={75} fill="#FFFFFF" />
        <Pie
          data={pieData}
          startAngle={90}
          endAngle={90 + score * 360}
          innerRadius={70}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fillColor}
              cornerRadius="50%"
            />
          ))}
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

ScoreChart.propTypes = {
  score: PropTypes.number,
};

export default ScoreChart;
