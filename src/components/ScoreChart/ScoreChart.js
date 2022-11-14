import { useSportSeeApi } from "../../utils/callAPI/useSportSeeApi";
import { getUserScore } from "../../utils/services/postApiService";
import { getUserScoreMocked } from "../../utils/mock/mockedAPI";
import { PieChart, Pie, Cell } from "recharts";
import Error404 from "../../pages/Error404/Error404";
import "./ScoreChart.css";

function ScoreChart({ id }) {
  //Get score data from SportSee API
  const { data, error } = useSportSeeApi(id);

  if (error) {
    return (
      <div className="radar-bar-chart">
        <Error404 />
      </div>
    );
  }

  //Extract user score from API data
  const score = getUserScore(data);

  //Extract score from mocked data
  //const score = getUserScoreMocked(id);

  const pieData = [{ name: "completed", value: score, fillColor: "#FF0101" }];

  return (
    <div className="score-chart">
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
export default ScoreChart;
