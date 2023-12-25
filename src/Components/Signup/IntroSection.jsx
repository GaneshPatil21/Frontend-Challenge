import React from "react";
import "../../styles/SignUp/IntroSection.css";

const IntroSection = ({ text }) => {
  return (
    <section className="intro">
      <h2>{text}</h2>
    </section>
  );
};

export default IntroSection;
