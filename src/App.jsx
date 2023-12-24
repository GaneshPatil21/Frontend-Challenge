// ... (Previous code)

import React from "react";
import Header from "./Header";
import IntroSection from "./IntroSection";
import SignupForm from "./SignupForm";
import "./App.css";
import Star from "./assets/Star.png";
function App() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          width: "185.06px",
          height: "209.54px",
          top: "442px",
          left: "139px",
        }}
      >
        <img
          src={Star}
          alt="Image 1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Header />
      <div className="container">
        <main>
          <IntroSection />
          <SignupForm />
          {/* ... additional components */}
        </main>
      </div>
    </div>
  );
}

export default App;