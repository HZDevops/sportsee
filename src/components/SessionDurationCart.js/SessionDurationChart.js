import { useSportSeeApi } from "../../utils/callAPI/useSportSeeApi";
import { getUserAverageSessions } from "../../utils/services/postApiService";
import { getUserAverageSessionsMocked } from "../../utils/mock/mockedAPI.js";
import { LineChart, XAxis, Line, Tooltip } from "recharts";
import Error404 from "../../pages/Error404/Error404";
import "./SessionDurationChart.css";

/**
 * Custom tooltip of LineChart
 * @param {object} {payload
 * @param {boolean} active} - Content tooltip object
 * @returns {Component} - React component
 */
function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <>
        <div className="average-duration-tooltip">
          <p>{payload[0].value}min</p>
        </div>
      </>
    );
  }
  return null;
}

function SessionDurationChart({ id }) {
  //Get average sessions data from SportSee API
  const { data, error } = useSportSeeApi(id, "average-sessions");

  if (error) {
    return (
      <div className="average-duration-chart">
        <Error404 />
      </div>
    );
  }

  //Extract user sessions from API data
  const sessions = getUserAverageSessions(data);

  //Extract sessions from mocked data
  //const sessions = getUserAverageSessionsMocked(userId);

  return (
    <div className="average-duration-chart">
      <h2>Durée moyenne des sessions</h2>
      <LineChart data={sessions} width={253} height={268}>
        <Tooltip
          wrapperStyle={{ left: -10 }}
          cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 100 }}
          content={<CustomTooltip />}
        />
        <XAxis
          tick={{ opacity: 0.5 }}
          tickLine={false}
          axisLine={false}
          stroke="white"
          dataKey="day"
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeOpacity="0.5"
          dot=""
        />
      </LineChart>
    </div>
  );
}
export default SessionDurationChart;
