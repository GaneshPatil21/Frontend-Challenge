import React from "react";
import "../../styles/SignUp/SignupForm.css";

const SignupForm = () => {
    return (
        <form className="signup-form">
            <div className="signup-form-group">
                <label>Email address</label>
                <input type="email" placeholder="Enter email address" />
            </div>
            <div className="signup-form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
            </div>
            <button>Sign up now</button>
        </form>
    );
};

export default SignupForm;
