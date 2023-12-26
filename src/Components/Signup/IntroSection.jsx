import React from "react";
import "../../Styles/SignUp/IntroSection.css";

const IntroSection = ({ text }) => {
    return (
        <section className="signup-intro">
            <span>{text}</span>
        </section>
    );
};

export default IntroSection;
