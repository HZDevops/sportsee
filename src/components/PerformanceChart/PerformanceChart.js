import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "./PerformanceChart.css";

function PerformanceChart({ performance }) {
  return (
    <div className="radar-bar-chart charts">
      <ResponsiveContainer>
        <RadarChart width={253} height={268} data={performance}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            tickLine={false}
            stroke="white"
            dy={4}
            tick={{
              fontSize: 10,
              fontWeight: 500,
            }}
            dataKey="kind"
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  performance: PropTypes.array,
};

export default PerformanceChart;
