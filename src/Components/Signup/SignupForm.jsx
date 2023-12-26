import React, { useState } from "react";
import "../../Styles/SignUp/SignupForm.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";

const SignupForm = () => {
    const navigate = useNavigate();
    const { globalState, updateGlobalState } = useGlobalContext();
    const [formError, setFormError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateGlobalState(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = globalState;

        if (!email.trim() || !password.trim()) {
            setFormError("* Incorrect email or password");

            // Clear the error after 3 seconds
            setTimeout(() => {
                setFormError(null);
            }, 3000);

            return;
        }

        // Reset form error
        setFormError(null);

        console.log("Form submitted:", { email, password });
        navigate("/financial-info");
    };
    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            {formError && <div className="form-error">{formError}</div>}
            <div className="signup-form-group">
                <label>Email address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    onChange={handleChange}
                />
            </div>
            <div className="signup-form-group">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Sign up now</button>
        </form>
    );
};

export default SignupForm;
