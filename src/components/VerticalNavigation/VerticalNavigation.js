import icon_sport_1 from "../../assets/icon1.png";
import icon_sport_2 from "../../assets/icon2.png";
import icon_sport_3 from "../../assets/icon3.png";
import icon_sport_4 from "../../assets/icon4.png";
import "./VerticalNavigation.css";

function VerticalNavigation() {
  return (
    <div className="sportsee-vertical-navbar">
      <nav>
        <ul>
          <li>
            <img className="sportsee-icon" src={icon_sport_1} alt="" />
          </li>
          <li>
            <img className="sportsee-icon" src={icon_sport_2} alt="" />
          </li>
          <li>
            <img className="sportsee-icon" src={icon_sport_3} alt="" />
          </li>
          <li>
            <img className="sportsee-icon" src={icon_sport_4} alt="" />
          </li>
        </ul>
      </nav>
      <div className="sportsee-copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </div>
  );
}

export default VerticalNavigation;
