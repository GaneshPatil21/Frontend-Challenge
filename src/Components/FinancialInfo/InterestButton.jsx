// InterestButton.jsx
import React, { useState } from "react";
import "../../styles/financialinfo/InterestButton.css";
import plusIcon from "../../assets/plus-icon.png";
import minusIcon from "../../assets/minus-icon.png";
import { useGlobalContext } from "../../Context/GlobalContext";

const InterestButton = ({ label }) => {
    const [isActive, setIsActive] = useState(false);
    const { globalState, updateGlobalState } = useGlobalContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateGlobalState(name, value);
    };

    const handleClick = () => {
        setIsActive(!isActive);
        const name = "interests";
        let { interests } = globalState;
        if (interests.includes(label)) {
            interests = interests.filter((item) => item != label);
            console.log("interest removed: ", interests);
            updateGlobalState(name, interests);
        } else {
            interests.push(label);
            console.log("interest added: ", interests);
            updateGlobalState(name, interests);
        }
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
