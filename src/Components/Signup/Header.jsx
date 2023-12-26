import React from "react";
import Star from "../../assets/Star.png";
import "../../Styles/SignUp/Header.css";

const Header = () => {
    return (
        <div className="signup-header">
            <div className="signup-logo-container">
                <img src={Star} alt="Example" className="compound-logo-image" />
                <span>Compound</span>
            </div>
        </div>
    );
};

export default Header;
