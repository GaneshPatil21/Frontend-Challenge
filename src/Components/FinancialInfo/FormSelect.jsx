import React from "react";
import "../../styles/financialinfo/FormSelect.css";
import { useGlobalContext } from "../../Context/GlobalContext";

const FormSelect = ({ label, options, ...rest }) => {
    const { globalState, updateGlobalState } = useGlobalContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateGlobalState(name, value);
    };

    return (
        <div className="form-group">
            <div>
                <span>{label}</span>
            </div>
            <select onChange={handleChange} name="income" {...rest}>
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
