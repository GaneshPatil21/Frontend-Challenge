// ... (Previous code)

import React from "react";
import SignUpPage from "./Pages/SignUpPage";
import FinancialInfoPage from "./Pages/FinancialInfoPage";
import Onboarding from "./Pages/Onboarding";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Context/GlobalContext";

import "./App.css";

function App() {
    return (
        <ContextProvider>
            <Routes>
                <Route path="/" element={<SignUpPage />} />
                <Route path="/financial-info" element={<FinancialInfoPage />} />
                <Route path="/onboarding" element={<Onboarding />} />
            </Routes>
        </ContextProvider>
    );
}

export default App;
