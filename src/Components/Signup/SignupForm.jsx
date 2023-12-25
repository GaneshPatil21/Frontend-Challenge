import React from "react";
import "./App.css";

const SignupForm = () => {
  return (
    <form className="signup-form">
      <div className="form-group">
        <label>Email address</label>
        <input type="email" placeholder="Enter email address" />
      </div>
      <div className="form-group">
        <label>Passwordww</label>
        <input type="password" placeholder="Enter password" />
      </div>
      <button>Sign up now</button>
    </form>
  );
};

export default SignupForm;