import { useParams } from "react-router-dom";
import useSportSeeApi from "../../utils/hook/useSportSeeApi";
import { getUserMainDataMocked } from "../../utils/mock/mockedAPI.js";
//import getUserMainData from "../../utils/services/getUserMainData";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import SessionDurationChart from "../../components/SessionDurationCart.js/SessionDurationChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard";
import Error404 from "../Error404/Error404";
import "./Dashboard.css";

function Dashboard() {
  let { userId } = useParams();

  const userFirstname = getUserMainDataMocked(userId).firstname;
  const userKeydata = getUserMainDataMocked(userId).keydata;
  const userScore = getUserMainDataMocked(userId).score;

  //const userMainData = useSportSeeApi(userId);

  //Get user first-name and keydata
  /*const userFirstname = getUserMainData(userMainData).firstname;
  const userKeydata = getUserMainData(userMainData).keydata;
  const userScore = getUserMainData(userMainData).score;*/

  /*if (userMainData.error) {
    return (
      <main>
        <Error404 />
      </main>
    );
  }*/
  if (!userFirstname) {
    return (
      <main>
        <Error404 />
      </main>
    );
  }
  return (
    <main>
      <HeaderDashboard firstname={userFirstname} />
      <DailyActivityChart userId={userId} />
      <section className="charts">
        <SessionDurationChart userId={userId} />
        <PerformanceChart userId={userId} />
        <ScoreChart score={userScore} />
      </section>
      <KeyDataCard keydata={userKeydata} />
    </main>
  );
}

export default Dashboard;
