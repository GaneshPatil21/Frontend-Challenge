import React from "react";
import "../../Styles/financialinfo/StepIndicator.css";
import completeIcon from "../../assets/complete.png"; // Adjust the path as necessary
import completeIconFilled from "../../assets/complete-filled.png"; // Adjust the path as necessary

const StepIndicator = ({ currentStep }) => {
    const steps = [
        { label: "Register", number: "1" },
        { label: "Add Your Financial Info", number: "2" },
        { label: "Earn Your Badge!", number: "3", isLast: true },
    ];

    return (
        <div className="step-indicator">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`step ${
                            currentStep === index + 1 ? "active-step" : ""
                        }`}
                    >
                        <div
                            className={`step-icon ${
                                currentStep === index + 1 ? "active" : ""
                            }`}
                        >
                            {step.isLast && currentStep != 3 ? (
                                <img
                                    src={completeIcon}
                                    alt="Completed"
                                    className="step-completed-icon"
                                />
                            ) : (
                                <span>{step.number != 3 && step.number}</span>
                            )}

                            {step.isLast && currentStep == 3 ? (
                                <img
                                    src={completeIconFilled}
                                    alt="Completed"
                                    className="step-completed-icon"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={`step-line ${
                                currentStep > index + 1 ? "solid" : "dotted"
                            }`}
                        ></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default StepIndicator;

// import React from 'react';
// import "../../Styles/financialinfo/StepIndicator.css";
// import completeIcon from '../../assets/complete.png'; // Adjust the path as necessary
// import completeIconFilled from '../../assets/complete-filled.png'; // Adjust the path as necessary

// const StepIndicator = ({ currentStep }) => {
//   const steps = [
//     { label: 'Register', number: '1' },
//     { label: 'Add Your Financial Info', number: '2' },
//     { label: 'Earn Your Badge!', number: '3', isLast: true }
//   ];

//   const isLineSolid = (index) => {
//     return currentStep > index + 1;
//   };

//   return (
//     <div className="step-indicator">
//       {steps.map((step, index) => (
//         <React.Fragment key={index}>
//           <div className={`step ${currentStep === index + 1 ? 'active' : ''}`}>
//             <div className="step-icon">

//               {step.isLast && currentStep != 3 ? (
//                 <img src={completeIcon} alt="Completed" className="step-completed-icon" />
//               ) : (
//                 step.number
//               )}
//               {step.isLast && currentStep == 3 ? (
//                 <img src={completeIconFilled} alt="Completed" className="step-completed-icon" />
//               ) : (
//                 ''
//               )}
//             </div>
//           </div>
//           {index < steps.length - 1 && (
//             <div className={`step-line ${isLineSolid(index) ? 'solid' : 'dotted'}`}></div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default StepIndicator;
