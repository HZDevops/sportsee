import { useParams } from "react-router-dom";
import useSportSeeApi from "../../utils/hook/useSportSeeApi";
import getUserMainData from "../../utils/services/getUserMainData";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import SessionDurationChart from "../../components/SessionDurationCart.js/SessionDurationChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard";
import "./Dashboard.css";

function Dashboard() {
  let { userId } = useParams();

  const userMainData = useSportSeeApi(userId);

  //Get user first-name and keydata
  const userFirstname = getUserMainData(userMainData).firstname;
  const userKeydata = getUserMainData(userMainData).keydata;
  const userScore = getUserMainData(userMainData).score;

  return (
    <main>
      {userFirstname ? <HeaderDashboard firstname={userFirstname} /> : ""}
      <DailyActivityChart userId={userId} />
      <section className="charts">
        <SessionDurationChart userId={userId} />
        <PerformanceChart userId={userId} />
        {userScore ? <ScoreChart score={userScore} /> : ""}
      </section>
      {userKeydata ? <KeyDataCard keydata={userKeydata} /> : ""}
    </main>
  );
}

export default Dashboard;
