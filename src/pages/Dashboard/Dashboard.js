import { useParams } from "react-router-dom";
import {
  useSportSeeApiMainData,
  useSportSeeApiActivity,
  useSportSeeApiSessions,
  useSportSeeApiPerformance,
} from "../../utils/api/callSportSeeApi";
import {
  getUserFirstname,
  getUserDailyActivity,
  getUserAverageSessions,
  getUserPerformance,
  getUserScore,
  getUserKeydata,
} from "../../utils/services/postApiService";
import {
  getUserMainDataMocked,
  getUserDailyActivityMocked,
  getUserAverageSessionsMocked,
  getUserPerformanceMocked,
  getUserScoreMocked,
  getUserKeydataMocked,
} from "../../utils/mock/mockedAPI.js";

import VerticalNavigation from "../../components/VerticalNavigation/VerticalNavigation";
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
  const { userMainData, userError } = useSportSeeApiMainData(userId);

  //Get user daily activities data from SportSee API
  const { activityData } = useSportSeeApiActivity(userId);

  //Get average-sessions data from SportSee API
  const { sessionData } = useSportSeeApiSessions(userId);

  //Get performance data from SportSee API
  const { performanceData } = useSportSeeApiPerformance(userId);

  if (userError) {
    return (
      <main>
        <VerticalNavigation />
        <Error404 />
      </main>
    );
  }

  //Extract user firstname from API data
  const userFirstname = getUserFirstname(userMainData);

  //Extract activities from API data
  const userActivities = getUserDailyActivity(activityData);

  //Extract user sessions from API data
  const userSessions = getUserAverageSessions(sessionData);

  //Extract user performances from API data
  const userPerformance = getUserPerformance(performanceData);

  //Extract user score from API data
  const userScore = getUserScore(userMainData);

  //Extract user keydata from API data
  const userKeydata = getUserKeydata(userMainData);

  //Extract activities from mocked data
  //const userActivities = getUserDailyActivityMocked(userId);

  //Extract sessions from mocked data
  //const userSessions = getUserAverageSessionsMocked(userId);

  //Extract performances from mocked data
  //const userPerformance = getUserPerformanceMocked(userId);

  //Extract score from mocked data
  //const userScore = getUserScoreMocked(userId);

  //Extract keydata from mocked data
  //const userKeydata = getUserKeydataMocked(userId);

  return (
    <main>
      <VerticalNavigation />
      <HeaderDashboard firstname={userFirstname} />
      <DailyActivityChart activities={userActivities} />
      <div className="specific-charts">
        <SessionDurationChart sessions={userSessions} />
        <PerformanceChart performance={userPerformance} />
        <ScoreChart score={userScore} />
      </div>
      <KeyDataCard keydata={userKeydata} />
    </main>
  );
}

export default Dashboard;
