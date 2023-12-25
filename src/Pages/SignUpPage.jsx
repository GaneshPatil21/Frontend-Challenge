// SignUpPage.js

import React from "react";
import Header from "../Components/Signup/Header";
import IntroSection from "../Components/Signup/IntroSection";
import SignupForm from "../Components/Signup/SignupForm";
import "../styles/SignUp/SignUpPage.css"; // Import the CSS file
import Purple from "../assets/Purple.png";
import Red from "../assets/Red.png";
import Yellow from "../assets/Yellow.png";

function SignUpPage() {
    return (
        <div>
            <Header />
            <div className="main-container">
                {/* <div className="image image1">
                <img src={Purple} alt="Image 1" className="image" />
            </div>
            <div className="image image2">
                <img src={Red} alt="Image 2" className="image" />
            </div>
            <div className="image image3">
                <img src={Yellow} alt="Image 3" className="image" />
            </div> */}

                <div className="signup-image-container-1">
                    <img
                        src={Purple}
                        alt="signup-image-1"
                        className="signup-image-1"
                    />
                </div>
                <div>
                    <div className="signup-form-container">
                        <main>
                            <IntroSection text="Your start to financial literacy." />
                            <SignupForm />
                        </main>
                    </div>
                </div>
                <div className="signup-image-container-2">
                    <img
                        src={Red}
                        alt="signup-image-2"
                        className="signup-image-2"
                    />
                    <img
                        src={Yellow}
                        alt="signup-image-3"
                        className="signup-image-3"
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;

// import React from "react";
// import Header from "../Components/Signup/Header";
// import IntroSection from "../Components/Signup/IntroSection";
// import SignupForm from "../Components/Signup/SignupForm";
// import "../styles/SignUp/SignUpPage.css";
// import Purple from "../assets/Purple.png";
// import Red from "../assets/Red.png";
// import Yellow from "../assets/Yellow.png";
// function SignUpPage() {
//   return (
//     <div style={{ height: "100vh" }}>
//       <div
//         style={{
//           position: "absolute",
//           width: "200.06px",
//           height: "209.54px",
//           top: "342px",
//           left: "139px",
//         }}
//       >
//         <img
//           src={Purple}
//           alt="Image 1"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           width: "195.48px",
//           height: "189.76px",
//           top: "187px",
//           left: "1039px",
//         }}
//       >
//         <img
//           src={Red}
//           alt="Image 2"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           width: "272.3px",
//           height: "192.5px",
//           top: "577px",
//           left: "1039px",
//         }}
//       >
//         <img
//           src={Yellow}
//           alt="Image 3"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//       </div>
//       <Header />
//       <div className="container">
//         <main>
//           <IntroSection text="Your start to financial literacy." />
//           <SignupForm />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default SignUpPage;
