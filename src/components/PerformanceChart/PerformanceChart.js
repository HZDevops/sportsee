import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "./PerformanceChart.css";

function PerformanceChart({ performance }) {
  return (
    <div className="radar-bar-chart">
      <RadarChart
        width={253}
        height={268}
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={performance}
      >
        <PolarGrid />
        <PolarAngleAxis tickLine={false} stroke="white" dataKey="kind" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}

PerformanceChart.propTypes = {
  performance: PropTypes.array,
};

export default PerformanceChart;
