// ... (Previous code)

import React from "react";
import SignUpPage from "./Pages/SignUpPage";
import Onboarding from "./Pages/Onboarding";
import FinancialInfoPage from "./Pages/FinancialInfoPage";
import "./App.css";

function App() {
    return (
        <div>
            {/* <Onboarding /> */}
            <FinancialInfoPage />
        </div>
    );
}

export default App;
