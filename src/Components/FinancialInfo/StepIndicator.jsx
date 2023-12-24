import React from "react";
import "../../styles/financialinfo/StepIndicator.css"; 

const StepIndicator = ({ steps, currentStep }) => {
    return (
        <div className="steps">
            {steps.map((step, index) => (
                <React.Fragment key={step}>
                    <span
                        className={`step ${
                            index === currentStep ? "current" : ""
                        }`}
                    >
                        {step}
                    </span>
                    {index < steps.length - 1 && <hr className="divider" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default StepIndicator;
