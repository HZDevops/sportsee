import axios from "axios";
import { useState, useEffect } from "react";
//import useSportSeeApiServices from "../../utils/hook/useSportSeeApiServices";
//import getUserAverageSessions from "../../utils/services/getUserAverageSessions";
import { getUserAverageSessionsMocked } from "../../utils/mock/mockedAPI.js";
import { LineChart, XAxis, Line, Tooltip, ResponsiveContainer } from "recharts";
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

function SessionDurationChart({ userId }) {
  const [sessionData, setSessionData] = useState({});
  const [isSessionLoading, setSessionLoading] = useState(false);
  const [sessionError, setSessionError] = useState(false);

  // Fetch user activities from API
  useEffect(() => {
    setSessionLoading(true);
    axios
      .get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((response) => {
        setSessionData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setSessionError(true);
      })
      .finally(() => {
        setSessionLoading(false);
      });
  }, [userId]);

  //const sessionData = useSportSeeApiServices(userId, "average-sessions");

  //const userSession = getUserAverageSessions(sessionData);

  const userSession = getUserAverageSessionsMocked(userId);

  // replace the number index with the day index
  const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
  if (userSession) {
    for (let element of userSession) {
      if (element.day in days) {
        element.day = days[element.day];
      }
    }
  }

  return (
    <div className="average-duration-chart">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userSession}>
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
      </ResponsiveContainer>
    </div>
  );
}
export default SessionDurationChart;
