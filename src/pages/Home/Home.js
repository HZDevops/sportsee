import { useParams } from "react-router-dom";

import useFetch from "../../utils/fetchData.js";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import "./Home.css";

function Home() {
  let { userId } = useParams();
  const user = useFetch(userId);

  return (
    <HeaderDashboard firstname={user?.userData?.data?.userInfos?.firstName} />
  );
}

export default Home;
