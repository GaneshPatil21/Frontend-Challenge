// FinancialInfoPage.js
import React from "react";
import StepIndicator from "../Components/FinancialInfo/StepIndicator";
import FormSelect from "../Components/FinancialInfo/FormSelect";
import RadioButton from "../Components/FinancialInfo/RadioButton";
import InterestButton from "../Components/FinancialInfo/InterestButton";
import NextButton from "../Components/FinancialInfo/NextButton";
import "../styles/financialinfo/FinancialInfoPage.css";

function FinancialInfoPage() {
    // Define your steps, options, etc.
    const steps = [
        "1 Register",
        "2 Add Your Financial Info",
        "3 Earn Your Badge!",
    ];
    const incomeOptions = [
        { value: "", label: "Select" }, 
        { value: "50000", label: "Below 50,000" },
        { value: "50000-70000", label: "50,000 - 70,000" },
        { value: "70000-100000", label: "70,000 - 100,000" },
        { value: "100000", label: "Above 100,000" },
    ];
    const relationshipOptions = [
        { value: "single", label: "Single" },
        { value: "married_joint", label: "Married, filing taxes together" },
        {
            value: "married_separate",
            label: "Married, filing taxes separately",
        },
    ];

    return (
        <div className="financial-info-container">
            <StepIndicator steps={steps} currentStep={1} />
            <div className="financial-info">
                <h2>Tell us a little more about your financial personality</h2>
                <div className="form-section">
                    <div className="section-header">
                        1 Financial Information
                    </div>
                    <FormSelect label="Income" options={incomeOptions} />
                    <RadioButton
                        name="relationship_status"
                        options={relationshipOptions}
                    />
                </div>
                <div className="form-section">
                    <div className="section-header">
                        2 My Financial Interests
                    </div>
                    <div className="interests">
                        <InterestButton label="Budgeting" />
                        <InterestButton label="Investing" />
                        <InterestButton label="Client Management" />
                        <InterestButton label="Debt Management" />
                        <InterestButton label="Retirement Planning" />
                        <InterestButton label="Tax Planning" />
                        <InterestButton label="Goal Setting" />
                        <InterestButton label="Estate Planning" />
                        {/* Add the rest of the buttons */}
                    </div>
                </div>
                <NextButton label="Next" />
            </div>
        </div>
    );
}

export default FinancialInfoPage;
