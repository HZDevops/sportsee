import PropTypes from "prop-types";
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
 * Custom tooltip for BarChart
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

function DailyActivityChart({ activities }) {
  return (
    <div className="activity-chart">
      <h2>Activité quotidienne</h2>
      <ResponsiveContainer width="95%" height="95%">
        <BarChart data={activities} barGap={8} margin={{ left: 48 }}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            stroke="#74798C"
            padding={{ left: -40, right: -40 }}
            tickLine={false}
          />
          <YAxis
            type="number"
            yAxisId="kg"
            tickCount={3}
            tickLine={false}
            dataKey="kilogram"
            axisLine={false}
            dx={30}
            orientation="right"
            domain={["dataMin - 1", "dataMax + 2"]}
            tick={{ fontSize: 14 }}
            stroke="#74798C"
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 50"]}
            hide={true}
          />

          <Tooltip
            width={39}
            height={63}
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
            yAxisId="kg"
            name="Poids (kg)"
            barSize={8}
            radius={[10, 10, 0, 0]}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            yAxisId="cal"
            name="Calories brûlées (kCal)"
            barSize={8}
            radius={[10, 10, 0, 0]}
            dataKey="calories"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

DailyActivityChart.propTypes = {
  activities: PropTypes.array,
};

export default DailyActivityChart;
