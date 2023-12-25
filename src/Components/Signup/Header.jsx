import React from "react";
import Star from "../../assets/Star.png";
import "../../styles/SignUp/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img width="48" height="48" src={Star} alt="Example" />
        <h5>Compound</h5>
      </div>
    </div>
  );
};

export default Header;
