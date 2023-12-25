import React from "react";
import "../../styles/financialinfo/RadioButton.css";

const RadioButton = ({ name, options, ...rest }) => {
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
