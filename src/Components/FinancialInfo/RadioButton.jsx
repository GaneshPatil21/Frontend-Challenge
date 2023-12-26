import React from "react";
import "../../Styles/financialinfo/RadioButton.css";
import { useGlobalContext } from "../../Context/GlobalContext";

const RadioButton = ({ name, options, ...rest }) => {
    const { globalState, updateGlobalState } = useGlobalContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateGlobalState(name, value);
    };
    return (
        <div className="form-group">
            <div className="sub-title">
                <span>Relationship Status</span>
            </div>
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        onChange={handleChange}
                        defaultChecked={option.value === "single"}
                        {...rest}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export default RadioButton;
