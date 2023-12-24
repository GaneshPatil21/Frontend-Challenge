import React, { useState } from "react";
import "../../styles/financialinfo/InterestButton.css";

const InterestButton = ({ label }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button
            className={`interest ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            {isActive ? label + " -" : label + " +"}
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
