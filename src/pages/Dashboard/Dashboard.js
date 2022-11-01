import { useParams } from "react-router-dom";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
//import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import "./Dashboard.css";

function Dashboard() {
  let { userId } = useParams();

  return (
    <main>
      <HeaderDashboard userId={userId} />
      <DailyActivityChart userId={userId} />
    </main>
  );
}

export default Dashboard;
