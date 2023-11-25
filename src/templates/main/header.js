import React, { useState } from "react";
import "../styles/style.css";
import "../styles/media.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header-div">
            <Link to="/">
              <img src="/images/Group 5.png" alt="ss" />
            </Link>

            <nav className="nav">
              <ul className="nav-ul">
                <li className="nav-li">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-li">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="nav-li">
                  <a href="#">Create your plan</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Responsive menu */}
          <div
            className={`mean-toggle ${isActive ? "active" : ""}`}
            onClick={handleToggle}
          ></div>
          <a href="#">
            <img src="/images/Group 5.png" alt="" className="logo" />
          </a>
          <nav className={`nav-res ${isActive ? "active" : ""}`}>
            <ul>
              <li className="nav-li">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-li">
                <Link className="link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-li">
                <a href="#">Create your plan</a>
              </li>
            </ul>
          </nav>
          {/* Responsive menu end */}
        </div>
      </header>
    </div>
  );
};

export default Header;
