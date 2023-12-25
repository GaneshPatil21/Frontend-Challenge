//ProgressHeader.jsx

import React from "react";
import "../../styles/financialinfo/ProgressHeader.css";
import StepIndicator from "./StepIndicator";

const ProgressHeader = ({ currentStep }) => {
    const getStepStyle = (stepNumber) => {
        return currentStep === stepNumber
            ? { fontWeight: "bold", color: "#0057DA" }
            : {};
    };

    return (
        <div>
            <StepIndicator currentStep={currentStep} />
            <div className="step-names">
                <span className="step-name-1" style={getStepStyle(1)}>
                    Register
                </span>
                <span className="step-name-2" style={getStepStyle(2)}>
                    Add Your Financial Info
                </span>
                <span className="step-name-3" style={getStepStyle(3)}>
                    Earn Your Badge!
                </span>
            </div>
        </div>
    );
};

export default ProgressHeader;

// import React from "react";
// import "../../styles/financialinfo/ProgressHeader.css";
// import StepIndicator from "./StepIndicator";

// const ProgressHeader = ({ currentStep }) => {
//     return (
//         <div>
//             <StepIndicator currentStep={currentStep} />
//             <div className="step-names">
//                 <span className="step-name-1">Register</span>
//                 <span className="step-name-2">Add Your Financial Info</span>
//                 <span className="step-name-3">Earn Your Badge!</span>
//             </div>
//             {/* <div className="number-icon">{currentStep}</div> */}
//         </div>
//     );
// };

// export default ProgressHeader;
