import { useSportSeeApi } from "../../utils/callAPI/useSportSeeApi";
import { getUserPerformance } from "../../utils/services/postApiService";
import { getUserPerformanceMocked } from "../../utils/mock/mockedAPI.js";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import Error404 from "../../pages/Error404/Error404";
import "./PerformanceChart.css";

function PerformanceChart({ id }) {
  const { data, error } = useSportSeeApi(id, "performance");

  if (error) {
    return (
      <div className="radar-bar-chart">
        <Error404 />
      </div>
    );
  }

  //Get user performances from API data
  const performances = getUserPerformance(data);

  //Extract performances from mocked data
  //const performances = getUserPerformanceMocked(id);

  return (
    <div className="radar-bar-chart">
      <RadarChart
        width={253}
        height={268}
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={performances}
      >
        <PolarGrid />
        <PolarAngleAxis tickLine={false} stroke="white" dataKey="kind" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}
export default PerformanceChart;
