import React from "react";
import Header from "../Components/Signup/Header";
import IntroSection from "../Components/Signup/IntroSection";
import Sheild from "../assets/Sheild.png";
import verified from "../assets/verified.png";
import LeftWing from "../assets/LeftWing.svg";
import "../styles/Onboarding/Onboarding.css";

function Onboarding() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Header />
      <div className="container">
        <div className="subcontainer">
          <IntroSection text="Welcome to Compound!" />

          <div className="labelContainer">
            <label className="label">
              Congrats on finishing your onboarding! As a reward, you’ve earned
              your first badge: Profile Perfection!
            </label>
          </div>

          {/* Pictures */}
          <div
            style={{
              display: "flex",
              padding: "20px",
              //backgroundColor: "red",
              // width: "100vw",
              //justifyContent: "center",
            }}
          >
            <div>
              <img
                src={LeftWing}
                alt="Image 1"
                style={{
                  //   width: "100%",
                  //   height: "100%",
                  objectFit: "cover",
                  backgroundColor: "green",
                }}
              />
            </div>

            <div
              style={{
                position: "relative",
                //padding: "10px",
                backgroundColor: "pink",
                width: "200px",
                height: "200px",
                // objectFit: "cover",
              }}
            >
              {/* -------------------------------------------------------------           */}
              <div
                style={{
                  position: "absolute",
                  width: "65px",
                  height: "65px",
                  backgroundColor: "#0057DA",
                  right: "0",
                  top: "0",
                  borderRadius: "14px",
                }}
              >
                <img
                  src={verified}
                  alt="Image 1"
                  style={{
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
              </div>
              {/* ----------------------------------------------------- */}
              <img
                src={Sheild}
                alt="Image 1"
                style={{
                  width: "100%",
                  height: "100%",
                  //objectFit: "cover",
                  //flexShrink: 0,
                }}
              />
            </div>
          </div>

          {/* End of Pictures */}

          <div className="labelContainer2">
            <label className="label">
              You’ve earned it for taking the first step towards financial
              empowerment. We’re here to support you every step of the way.
              Start exploring more features to continue your financial journey!
            </label>
          </div>

          <button className="button">Go to Dashboard</button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
