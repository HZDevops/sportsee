import { useSportSeeApi } from "../../utils/callAPI.js/useSportSeeApi";
import { getUserKeydata } from "../../utils/services/postApiService";
import { getUserKeyadataMocked } from "../../utils//mock/mockedAPI.js";
import caloriesIcon from "../../assets/calories-icon.png";
import carbsIcon from "../../assets/carbs-icon.png";
import fatIcon from "../../assets/fat-icon.png";
import proteinIcon from "../../assets/protein-icon.png";
import Error404 from "../../pages/Error404/Error404";
import "./KeyDataCard.css";

function KeyDataCard({ id }) {
  //Get keydata data from SportSee API
  const { data, error } = useSportSeeApi(id);

  if (error) {
    return (
      <div className="keydata-container">
        <Error404 />
      </div>
    );
  }

  //Extract user keydata from API data
  const keydata = getUserKeydata(data);

  //Extract keydata from mocked data
  //const keydata = getUserKeydataMocked(id);

  return (
    <div className="keydata-container">
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
    </div>
  );
}
export default KeyDataCard;
