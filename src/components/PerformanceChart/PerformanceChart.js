import axios from "axios";
import { useEffect, useState } from "react";
import getUserPerformance from "../../utils/services/getUserPerformance";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./PerformanceChart.css";

function PerformanceChart({ userId }) {
  const [performanceData, setPerformanceData] = useState({});
  const [isPerformanceLoading, setPerformanceLoading] = useState(false);
  const [performanceError, setPerformanceError] = useState(false);

  // Fetch user activities from API
  useEffect(() => {
    setPerformanceLoading(true);
    axios
      .get(`http://localhost:3000/user/${userId}/performance`)
      .then((response) => {
        setPerformanceData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setPerformanceError(true);
      })
      .finally(() => {
        setPerformanceLoading(false);
      });
  }, [userId]);

  const performances = getUserPerformance(performanceData);

  return (
    <div className="radar-bar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performances}>
          <PolarGrid />
          <PolarAngleAxis tickLine={false} stroke="white" dataKey="kind" />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default PerformanceChart;
