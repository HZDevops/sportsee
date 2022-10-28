import { useState, useEffect } from "react";

function HeaderDashboard({ firstName }) {
  const [userData, setUserData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  return (
    <div className="header-home">
      <h1>
        Bonjour <span className="first-name">{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default HeaderDashboard;
