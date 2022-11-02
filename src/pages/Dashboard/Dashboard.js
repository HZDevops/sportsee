import { useParams } from "react-router-dom";
import useSportSeeApi from "../../utils/hook/useSportSeeApi";
import getUserMainData from "../../utils/services/getUserMainData";
import DailyActivityChart from "../../components/DailyActivityChart/DailyActivityChart";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard";
import "./Dashboard.css";

function Dashboard() {
  let { userId } = useParams();
  //Get user information data from API
  const userInfoData = useSportSeeApi(userId);
  const firstname = getUserMainData(userInfoData);

  return (
    <main>
      <HeaderDashboard firstname={firstname.firstname} />
      <DailyActivityChart userId={userId} />
      <KeyDataCard keydata={firstname.keydata} />
    </main>
  );
}

export default Dashboard;
