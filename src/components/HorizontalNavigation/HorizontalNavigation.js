import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import './HorizontalNavigation.css'

function HorizontalNavigation () {
    return (
        <header className="kasa-header">
            <img src={logo} className="kasa-sportsee" alt="logo"></img>
            <nav className="sportsee-navbar">
                <NavLink end to="/" className="sportsee-link">
                    Accueil
                </NavLink>
                <NavLink to="/profil" className="sportsee-link">
                    Profil
                </NavLink>
                <NavLink to="/reglage" className="sportsee-link">
                    Réglage
                </NavLink>
                <NavLink to="/communauté" className="sportsee-link">
                    Communauté
                </NavLink>
            </nav>
        </header>
    );
}

export default HorizontalNavigation;