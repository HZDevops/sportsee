import useSportSeeApi from "../../utils/hook/useSportSeeApi";
import getUserKeyData from "../../utils/services/getUserKeyData";
import caloriesIcon from "../../assets/calories-icon.png";
import carbsIcon from "../../assets/carbs-icon.png";
import fatIcon from "../../assets/fat-icon.png";
import proteinIcon from "../../assets/protein-icon.png";
import "./KeyDataCard.css";

function KeyDataCard({ userId }) {
  //Get user information data from API
  const userKeyData = useSportSeeApi(userId);
  const keydata = getUserKeyData(userKeyData);

  return (
    <aside>
      <div className="keydata-card">
        <img className="icon" src={caloriesIcon} alt="" />
        <div className="keydata-content">
          <p>{keydata.calorieCount / 1000}kCal</p>
          <span>Calories</span>
        </div>
      </div>
      <div className="keydata-card">
        <img className="icon" src={proteinIcon} alt="" />
        <div className="keydata-content">
          <p>{keydata.proteinCount}g</p>
          <span>Proteines</span>
        </div>
      </div>
      <div className="keydata-card">
        <img className="icon" src={carbsIcon} alt="" />
        <div className="keydata-content">
          <p>{keydata.carbohydrateCount}g</p>
          <span>Glucides</span>
        </div>
      </div>
      <div className="keydata-card">
        <img className="icon" src={fatIcon} alt="" />
        <div className="keydata-content">
          <p>{keydata.lipidCount}g</p>
          <span>Lipides</span>
        </div>
      </div>
    </aside>
  );
}
export default KeyDataCard;
