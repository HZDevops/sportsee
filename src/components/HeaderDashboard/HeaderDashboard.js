import "./HeaderDashboard.css";

function HeaderDashboard({ firstname }) {
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
