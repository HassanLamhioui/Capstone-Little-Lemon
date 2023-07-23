import React, { useState} from 'react';
import "../styles/Header.css"
import LogoHeader from "../assets/Logo-1.png"
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <Link to = "/">
            <img className="logo-img" src = { LogoHeader } alt = "Logo Little Lemon" />
        </Link>
        <nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="#">Login</Link></li>
            </ul>
        </nav>
        <div className="hamburger" onClick = {handleClick}>
            {click ? (<AiOutlineClose size={20} style={{ color: "#333333"}}/>) : (<AiOutlineMenu size={30} style={{ color: "#333333", borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px"}}/>)}  
        </div>
      </header>
    </>
  )
}

export default Header
