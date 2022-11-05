import { useParams } from "react-router-dom";
import useSportSeeApi from "../../utils/hook/useSportSeeApi";
import getUserMainData from "../../utils/services/getUserMainData";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import SessionDurationChart from "../../components/SessionDurationCart.js/SessionDurationChart";
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard";
import "./Dashboard.css";

function Dashboard() {
  let { userId } = useParams();

  const userMainData = useSportSeeApi(userId);

  //Get user first-name and keydata
  const userFirstname = getUserMainData(userMainData).firstname;
  const userKeydata = getUserMainData(userMainData).keydata;

  return (
    <main>
      {userFirstname ? <HeaderDashboard firstname={userFirstname} /> : ""}
      <section className="charts">
        <DailyActivityChart userId={userId} />
        <SessionDurationChart userId={userId} />
      </section>
      {userKeydata ? <KeyDataCard keydata={userKeydata} /> : ""}
    </main>
  );
}

export default Dashboard;
