import caloriesIcon from "../../assets/calories-icon.png";
import carbsIcon from "../../assets/carbs-icon.png";
import fatIcon from "../../assets/fat-icon.png";
import proteinIcon from "../../assets/protein-icon.png";
import "./KeyDataCard.css";

function KeyDataCard({ keydata }) {
  return (
    <aside>
      <div className="keydata-card">
        <img className="icon" src={caloriesIcon} alt="calorie icon" />
        <div className="keydata-content">
          <p>{keydata?.calorieCount / 1000}kCal</p>
          <span>Calories</span>
        </div>
      </div>
      <div className="keydata-card">
        <img className="icon" src={proteinIcon} alt="protein icon" />
        <div className="keydata-content">
          <p>{keydata?.proteinCount}g</p>
          <span>Proteines</span>
        </div>
      </div>
      <div className="keydata-card">
        <img className="icon" src={carbsIcon} alt="carbohydrate icon" />
        <div className="keydata-content">
          <p>{keydata?.carbohydrateCount}g</p>
          <span>Glucides</span>
        </div>
      </div>
      <div className="keydata-card">
        <img className="icon" src={fatIcon} alt="lipid icon" />
        <div className="keydata-content">
          <p>{keydata?.lipidCount}g</p>
          <span>Lipides</span>
        </div>
      </div>
    </aside>
  );
}
export default KeyDataCard;
