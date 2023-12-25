// FinancialInfoPage.js
import React from "react";
import ProgressHeader from "../Components/FinancialInfo/ProgressHeader";
import FormSelect from "../Components/FinancialInfo/FormSelect";
import RadioButton from "../Components/FinancialInfo/RadioButton";
import InterestButton from "../Components/FinancialInfo/InterestButton";
import NextButton from "../Components/FinancialInfo/NextButton";
import NumberIcon from "../Components/FinancialInfo/NumberIcon";
import "../styles/financialinfo/FinancialInfoPage.css";

function FinancialInfoPage() {
    const incomeOptions = [
        { value: "", label: "Select" },
        { value: "0-50000", label: "Below 50,000" },
        { value: "50000-75000", label: "50,000 - 75,000" },
        { value: "75000-100000", label: "75,000 - 100,000" },
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
        <div className="financial-info-page">
            <div className="financial-info-header">
                <div>
                    {/* <StepIndicator steps={steps} currentStep={2} /> */}
                    <ProgressHeader currentStep={2} />
                </div>
            </div>
            <div className="financial-info-h2">
                <span>
                    Tell us a little more about your financial personality
                </span>
            </div>

            <div className="financial-info-container">
                <div className="form-section-1">
                    <div className="section-header">
                        <div>
                            <NumberIcon no={1} />
                        </div>
                        <span>Financial Information</span>
                    </div>
                    <FormSelect label="Income" options={incomeOptions} />
                    <RadioButton
                        label="Income"
                        name="relationship_status"
                        options={relationshipOptions}
                    />
                </div>
                <div className="form-section-2">
                    <div className="section-header">
                        <div>
                            <NumberIcon no={2} />
                        </div>

                        <span>My Financial Interests</span>
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
                    </div>
                </div>
            </div>
            <div className="financial-info-next">
                <NextButton label="Next" />
            </div>
        </div>
    );
}

export default FinancialInfoPage;
