// FinancialInfoPage.js
import React from "react";
import ProgressHeader from "../Components/FinancialInfo/ProgressHeader";
import FormSelect from "../Components/FinancialInfo/FormSelect";
import RadioButton from "../Components/FinancialInfo/RadioButton";
import InterestButton from "../Components/FinancialInfo/InterestButton";
import NextButton from "../Components/FinancialInfo/NextButton";
import NumberIcon from "../Components/FinancialInfo/NumberIcon";
import "../styles/financialinfo/FinancialInfoPage.css";
import { useGlobalContext } from "../Context/GlobalContext";

function FinancialInfoPage() {
    const { globalState, updateGlobalState } = useGlobalContext();
    const { formError } = globalState;

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

    // Get interests from import.meta.env
    const interests = import.meta.env.VITE_INTERESTS
        ? import.meta.env.VITE_INTERESTS.split(",")
        : [];

    return (
        <div className="financial-info-page">
            <div className="financial-info-header">
                <div>
                    <ProgressHeader currentStep={2} />
                </div>
            </div>
            <div className="financial-info-h2">
                <span>
                    Tell us a little more about your financial personality
                </span>
            </div>
            <div>
                {formError && (
                    <div className="finance-form-error">{formError}</div>
                )}
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
                        name="relationshipStatus"
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
                        {interests.map((interest, index) => (
                            <InterestButton key={index} label={interest} />
                        ))}
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
