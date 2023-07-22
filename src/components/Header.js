import React from "react";
import LogoHeader from "../assets/Logo-2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={LogoHeader} alt="logo" className='logoHeader'/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Bookings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
