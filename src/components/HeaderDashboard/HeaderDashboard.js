import useSportSeeApi from "../../utils/hook/useSportSeeApi";
import getUserFirstName from "../../utils/services/getUserFirstName";
import "./HeaderDashboard.css";

function HeaderDashboard({ userId }) {
  const userInfoData = useSportSeeApi(userId);
  const firstname = getUserFirstName(userInfoData);

  return (
    <div className="header-dashboard">
      <h1>
        Bonjour <span className="first-name">{firstname}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default HeaderDashboard;
