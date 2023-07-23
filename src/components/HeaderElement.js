import React from "react";
import "../styles/HeaderElement.css";
import LogoHeader from "../assets/Logo-1.png";
import Navigation from "../components/Navigation.js";
import { Link} from "react-router-dom";
import MobileNav from "../components/MobileNav.js";

const Navbar = () => {
  return (
    <div className="header">
          <Link to="/">
            <img className="logo-img" src={LogoHeader} alt="Logo Little Lemon" />
          </Link>
        <Navigation />
        <MobileNav />
    </div>
  );
};

export default Navbar;
