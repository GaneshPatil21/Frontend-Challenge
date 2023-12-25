// InterestButton.jsx
import React, { useState } from "react";
import "../../styles/financialinfo/InterestButton.css";
import plusIcon from "../../assets/plus-icon.png";
import minusIcon from "../../assets/minus-icon.png"; // Adjust the path as necessary

const InterestButton = ({ label }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button
            className={`interest ${isActive ? "active" : ""}`}
            onClick={handleClick}
        >
            {label}
            <img
                src={isActive ? minusIcon : plusIcon}
                alt={isActive ? "Minus" : "Plus"}
                className="img-plus-minus"
            />
        </button>
    );
};

export default InterestButton;

// import React from "react";
// import "../../styles/financialinfo/InterestButton.css";

// const InterestButton = ({ label, onClick }) => {
//     return (
//         <button className="interest" onClick={onClick}>
//             {label}
//         </button>
//     );
// };

// export default InterestButton;