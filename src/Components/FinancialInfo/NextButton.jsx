import React from "react";
import "../../styles/financialinfo/NextButton.css"; 

const NextButton = ({ label, ...rest }) => {
    return (
        <button className="next-btn" {...rest}>
            {label}
        </button>
    );
};

export default NextButton;
