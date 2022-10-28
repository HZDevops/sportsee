import { useState, useEffect } from "react";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import axios from "axios";
import "./Home.css";

function Home() {
  const [user, setUserData] = useState(null);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    // fetchData()
    setDataLoading(true);
    axios.get(`http://localhost:3000/user/12`).then((response) => {
      setUserData(response);
      setDataLoading(false);
    });
    /*   fetch(`http://localhost:3000/user/12`).then((response) =>
      response.json().then(({ user }) => {
        setUserData(user);
        setDataLoading(false);
      })
    );*/
  }, []);
  console.log(user);
  return <HeaderDashboard firstname={user?.data?.userInfos?.firstName} />;
}

export default Home;
