import { useParams } from "react-router-dom";
import { useSportSeeApi } from "../../utils/callAPI/useSportSeeApi";
import { getUserFirstname } from "../../utils/services/postApiService";
import { getUserMainDataMocked } from "../../utils/mock/mockedAPI.js";

import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import SessionDurationChart from "../../components/SessionDurationCart.js/SessionDurationChart";
import PerformanceChart from "../../components/PerformanceChart/PerformanceChart";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard";
import Error404 from "../Error404/Error404";
import "./Dashboard.css";

function Dashboard() {
  //Get user id from URL
  let { userId } = useParams();

  //Get user main data from SportSee API
  const { data, error } = useSportSeeApi(userId);

  if (error) {
    return (
      <main>
        <Error404 />
      </main>
    );
  }

  //Get user firstname from API data
  const userFirstname = getUserFirstname(data);

  return (
    <main>
      <HeaderDashboard firstname={userFirstname} />
      <section className="charts">
        <DailyActivityChart id={userId} />
        <div className="specific-charts">
          <SessionDurationChart id={userId} />
          <PerformanceChart id={userId} />
          <ScoreChart id={userId} />
        </div>
      </section>
      <KeyDataCard id={userId} />
    </main>
  );
}

export default Dashboard;
