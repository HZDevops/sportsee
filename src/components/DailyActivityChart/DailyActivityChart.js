import axios from "axios";
import { useState, useEffect } from "react";
//import useSportSeeApiServices from "../../utils/hook/useSportSeeApiServices";
import getUserDailyActivity from "../../utils/services/getUserDailyActivity";
import { getUserDailyActivityMocked } from "../../utils/mock/mockedAPI.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./DailyActivityChart.css";

/**
 * Custom tooltip of BarChart
 * @param {object} {payload
 * @param {boolean} active} - Content tooltip object
 * @returns {Component} - React component
 */
const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <>
        <div className="daily-chart-tooltip">
          <p>{payload[0].value}kg</p>
          <p>{payload[1].value}Kcal</p>
        </div>
      </>
    );
  }
  return null;
};

/**
 * Custom legend for the BarChart
 * @param {string} value - Legend value
 * @returns {Component} - React component
 */
const CustomLegendText = (value) => {
  return (
    <>
      <span style={{ color: "#74798C" }}>{value}</span>
    </>
  );
};

function DailyActivityChart({ userId }) {
  /*const [activityData, setActivityData] = useState({});
  const [isActivityLoading, setActivityLoading] = useState(false);
  const [activityError, setActivityError] = useState(false);

  // Fetch user activities from API
  useEffect(() => {
    setActivityLoading(true);
    axios
      .get(`http://localhost:3000/user/${userId}/activity`)
      .then((response) => {
        setActivityData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setActivityError(true);
      })
      .finally(() => {
        setActivityLoading(false);
      });
  }, [userId]);
  //const activityData = useSportSeeApiServices(userId, "activity");

  const activities = getUserDailyActivity(activityData);*/
  const activities = getUserDailyActivityMocked(userId);

  return activities ? (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activities}
          barGap={5}
          barCategoryGap={25}
          strokeDasharray="1 4"
        >
          <CartesianGrid vertical={false} />
          <YAxis
            type="number"
            tickCount={3}
            tickLine={false}
            dataKey="calories"
            axisLine={false}
            orientation="right"
            tick={{ fontSize: 12 }}
            stroke="#74798C"
          />
          <XAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            stroke="#74798C"
          />
          <Tooltip
            wrapperStyle={{ top: -50, left: 10 }}
            content={<CustomTooltip />}
          />
          <Legend
            wrapperStyle={{ paddingTop: "15px" }}
            formatter={CustomLegendText}
            height={50}
            iconSize={8}
            iconType="circle"
            align="right"
            verticalAlign="top"
          />
          <Bar
            name="Poids (kg)"
            radius={[10, 10, 0, 0]}
            stroke-linejoin={10}
            barSize={10}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]}
            barSize={10}
            dataKey="calories"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    ""
  );
}
export default DailyActivityChart;
