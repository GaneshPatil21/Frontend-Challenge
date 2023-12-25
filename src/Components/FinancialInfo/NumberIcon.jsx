import React from "react";
import "../../styles/financialinfo/NumberIcon.css"; 

const NumberIcon = ({ no }) => {
    return (
        <div className="number-icon">
            {no}
        </div>
    );
};

export default NumberIcon;