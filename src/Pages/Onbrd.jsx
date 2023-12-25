import React from "react";
import ProgressHeader from "../Components/FinancialInfo/ProgressHeader";
import IntroSection from "../Components/Signup/IntroSection";
import Sheild from "../assets/Sheild.png";
import verified from "../assets/verified.png";
import LeftWing from "../assets/LeftWing.svg";
import "../styles/Onboarding/Onbrd.css";

function Onboarding() {
    return (
        <div className="onboarding-page">
            <div className="onboarding-header">
                <div>
                    <ProgressHeader currentStep={3} />
                </div>
            </div>
            <div className="onboarding-container">
                <div>
                    <IntroSection text="Welcome to Compound!" />
                </div>

                <div className="onboarding-message-1">
                    <span>
                        Congrats on finishing your onboarding! As a reward,
                        you’ve earned your first badge:{" "}
                        <b>Profile Perfection!</b>
                    </span>
                </div>

                {/* Start of Pictures */}

                <div className="onboarding-images-container">
                    <div className="leftwing-image-container">
                        <img
                            src={LeftWing}
                            alt="ImageLeftWing"
                            className="leftwing-image"
                        />
                    </div>
                    <div className="shield-image-container">
                        <img
                            src={Sheild}
                            alt="ImageShield"
                            className="shield-image"
                        />
                        <div className="verified-image-container">
                            <img
                                src={verified}
                                alt="ImageVerified"
                                className="verified-image"
                            />
                        </div>
                    </div>
                    <div className="rightwing-image-container">
                        <img
                            src={LeftWing}
                            alt="ImageLeftWing"
                            className="rightwing-image"
                        />
                    </div>
                </div>

                {/* End of Pictures */}

                <div className="onboarding-message-2">
                    <span>
                        You’ve earned it for taking the first step towards
                        financial empowerment. We’re here to support you every
                        step of the way. Start exploring more features to
                        continue your financial journey!
                    </span>
                </div>

                <button className="dashboard-button">Go to Dashboard</button>
            </div>
        </div>
    );
}

export default Onboarding;
