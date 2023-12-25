import React from "react";
import "../../styles/financialinfo/FormSelect.css";

const FormSelect = ({ label, options, ...rest }) => {
    return (
        <div className="form-group">
            <div>
                <span>{label}</span>
            </div>
            <select {...rest}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;
