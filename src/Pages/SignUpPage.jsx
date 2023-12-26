// SignUpPage.js

import React from "react";
import Header from "../Components/Signup/Header";
import IntroSection from "../Components/Signup/IntroSection";
import SignupForm from "../Components/Signup/SignupForm";
import "../Styles/SignUp/SignUpPage.css"; // Import the CSS file
import Purple from "../assets/Purple.png";
import Red from "../assets/Red.png";
import Yellow from "../assets/Yellow.png";

function SignUpPage() {
    return (
        <div>
            <Header />
            <div className="main-container">
                <div className="signup-image-container-1">
                    <img
                        src={Purple}
                        alt="signup-image-1"
                        className="signup-image-1"
                    />
                </div>
                <div>
                    <div className="signup-form-container">
                        <main>
                            <IntroSection text="Your start to financial literacy." />
                            <SignupForm />
                        </main>
                    </div>
                </div>
                <div className="signup-image-container-2">
                    <img
                        src={Red}
                        alt="signup-image-2"
                        className="signup-image-2"
                    />
                    <img
                        src={Yellow}
                        alt="signup-image-3"
                        className="signup-image-3"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
