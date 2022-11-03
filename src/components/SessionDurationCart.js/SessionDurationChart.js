import useSportSeeApiServices from "../../utils/hook/useSportSeeApiServices";
import getUserAverageSessions from "../../utils/services/getUserAverageSessions";
import { LineChart, XAxis, Line, Tooltip, ResponsiveContainer } from "recharts";
import "./SessionDurationChart.css";

function SessionDurationChart({ userId }) {
  //Get daily user activity data from API
  const userSessionData = useSportSeeApiServices(userId, "average-session");
  const sessions = getUserAverageSessions(userSessionData);
}
export default SessionDurationChart;
