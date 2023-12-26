// ProgressHeader.jsx

import React, { useEffect, useState } from "react";
import "../../Styles/financialinfo/ProgressHeader.css";
import StepIndicator from "./StepIndicator";

const ProgressHeader = ({ currentStep }) => {
    const [step2Text, setStep2Text] = useState("Add Your Financial Info");
    const [step3Text, setStep3Text] = useState("Earn Your Badge!");

    const getStepStyle = (stepNumber) => {
        return currentStep === stepNumber
            ? { fontWeight: "bold", color: "#0057DA" }
            : {};
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setStep2Text("Financial Info");
                setStep3Text("Badge");
            } else {
                setStep2Text("Add Your Financial Info");
                setStep3Text("Earn Your Badge!");
            }
        };

        handleResize(); // Call on initial render
        window.addEventListener("resize", handleResize);

        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener("resize", handleResize);
        };
    }, [currentStep]);

    return (
        <div>
            <StepIndicator currentStep={currentStep} />
            <div className="step-names">
                <span className="step-name-1" style={getStepStyle(1)}>
                    Register
                </span>
                <span className="step-name-2" style={getStepStyle(2)}>
                    {step2Text}
                </span>
                <span className="step-name-3" style={getStepStyle(3)}>
                    {step3Text}
                </span>
            </div>
        </div>
    );
};

export default ProgressHeader;

// //ProgressHeader.jsx

// import React from "react";
// import "../../Styles/financialinfo/ProgressHeader.css";
// import StepIndicator from "./StepIndicator";

// const ProgressHeader = ({ currentStep }) => {
//     const getStepStyle = (stepNumber) => {
//         return currentStep === stepNumber
//             ? { fontWeight: "bold", color: "#0057DA" }
//             : {};
//     };

//     return (
//         <div>
//             <StepIndicator currentStep={currentStep} />
//             <div className="step-names">
//                 <span className="step-name-1" style={getStepStyle(1)}>
//                     Register
//                 </span>
//                 <span className="step-name-2" style={getStepStyle(2)}>
//                     Add Your Financial Info
//                 </span>
//                 <span className="step-name-3" style={getStepStyle(3)}>
//                     Earn Your Badge!
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default ProgressHeader;
