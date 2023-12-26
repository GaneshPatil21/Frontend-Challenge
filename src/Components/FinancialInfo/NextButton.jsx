import React, { useState } from "react";
import "../../styles/financialinfo/NextButton.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

const NextButton = ({ label, ...rest }) => {
    const navigate = useNavigate();

    const { globalState, updateGlobalState } = useGlobalContext();
    //const [formError, setFormError] = useState(null);
    const { formError } = globalState;
    const handleSubmit = () => {
        const { income, interests } = globalState;

        if (!income.trim() || interests.length == 0) {
            updateGlobalState("formError", "* Please fill all the details");
            //setFormError("* Please fill all the details");

            // Clear the error after 3 seconds
            setTimeout(() => {
                //setFormError(null);
                updateGlobalState("formError", null);
            }, 3000);

            return;
        }

        // Reset form error
        //setFormError(null);
        updateGlobalState("formError", null);

        console.log("Form submitted:", { income });
        navigate("/onboarding");
    };

    return (
        <button className="next-btn" {...rest} onClick={handleSubmit}>
            {label}
        </button>
    );
};

export default NextButton;
