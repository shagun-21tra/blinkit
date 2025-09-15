// import  { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Alert from "../../common/Alert/Alert";

// function Navbar() {
//   const navigate = useNavigate();
//   const [popup, setPopup] = useState(false);
//   const [step, setStep] = useState(1);
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [serverOtp, setServerOtp] = useState("");
//   const [alertData, setAlertData] = useState({ type: "", message: "" });

//   // Handle Phone Submit
//   const handlePhoneSubmit = async () => {
//     if (phone.length === 10) {
//       try {
//         const res = await fetch("http://localhost:3000/api/users", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ phone }),
//         });

//         const data = await res.json();
//         console.log(" Saved user:", data);

//         if (data.status) {
//           // Mock OTP
//           // const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
//           setServerOtp(data.otp);
//           // console.log(" OTP sent:", generatedOtp);

//           setAlertData({ type: "success", message:`Your Otp is ${data.otp}` });
//           setStep(2);
//         } else {
//           setAlertData({ type: "danger", message: data.msg });
//         }
//       } catch (err) {
//         console.error("Error saving user:", err);
//         setAlertData({
//           type: "danger",
//           message: "Server error. Try again later.",
//         });
//       }
//     } else {
//       setAlertData({ type: "danger", message: "Enter valid phone number." });
//     }
//   };

//   // Handle OTP Verify
//   const handleOtpSubmit = () => {
//     if (otp === serverOtp) {
//       console.log("🎉 OTP Verified:", otp);

//       setPopup(false);
//       setStep(1);
//       setPhone("");
//       setOtp("");
//       setServerOtp("");
//       setAlertData({ type: "success", message: "Login successful!" });
//       navigate("/home");
//     } else {
//       setAlertData({ type: "danger", message: "Invalid OTP. Try again." });
//     }
//   };

//   return (
//     <>
//       {/* 🔹 Global Alert (fixed below navbar) */}
//       <div
//         style={{
//           position: "fixed",
//           top: "70px",
//           left: 0,
//           right: 0,
//           zIndex: 1050,
//         }}
//       >
//         <div className="container">
//           <Alert
//             type={alertData.type}
//             message={alertData.message}
//             onClose={() => setAlertData({ type: "", message: "" })}
//           />
//         </div>
//       </div>

//       {/* 🔹 Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom px-3">
//         <div className="container-fluid d-flex align-items-center justify-content-between">
//           <div className="fw-bold fs-3 text-warning">
//             blink<span className="text-success">it</span>
//           </div>

//           <div className="d-flex align-items-center flex-grow-1 mx-4">
//             <div className="me-4">
//               <h6 className="mb-0 fw-bold">Delivery in 12 minutes</h6>
//               <small className="text-muted">Shop No 4 Gurudwara Market G...</small>
//             </div>
//             <input
//               type="text"
//               className="form-control"
//               placeholder='Search "sugar"'
//             />
//           </div>

//           <div className="d-flex align-items-center">
//             <button
//               className="btn btn-link text-dark me-3"
//               onClick={() => setPopup(true)}
//             >
//               Login
//             </button>
//             <button className="btn btn-secondary">My Cart</button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔹 Login Popup */}
//       {popup && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "10px",
//               width: "350px",
//               textAlign: "center",
//             }}
//           >
//             {step === 1 && (
//               <>
//                 <h4 className="fw-bold">India last minute app</h4>
//                 <p className="text-muted">Log in or Sign up</p>

//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   placeholder="Enter mobile number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <button
//                   className="btn btn-dark w-100 mb-2"
//                   onClick={handlePhoneSubmit}
//                 >
//                   Continue
//                 </button>
//               </>
//             )}

//             {step === 2 && (
//               <>
//                 <h4 className="fw-bold">Enter OTP</h4>
//                 <p className="text-muted">We sent an OTP to {phone}</p>

//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//                 <button
//                   className="btn btn-dark w-100 mb-2"
//                   onClick={handleOtpSubmit}
//                 >
//                   Verify OTP
//                 </button>
//               </>
//             )}

//             <button
//               className="btn btn-outline-secondary btn-sm mt-2"
//               onClick={() => {
//                 setPopup(false);
//                 setStep(1);
//                 setPhone("");
//                 setOtp("");
//                 setServerOtp("");
//               }}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../common/Alert/Alert";

function Navbar() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const [alertData, setAlertData] = useState({ type: "", message: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔹 Track login state

  // Handle Phone Submit
  const handlePhoneSubmit = async () => {
    if (phone.length === 10) {
      try {
        const res = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone }),
        });

        const data = await res.json();
        console.log(" Saved user:", data);

        if (data.status) {
          setServerOtp(data.otp);
          setAlertData({ type: "success", message: `Your Otp is ${data.otp}` });
          setStep(2);
        } else {
          setAlertData({ type: "danger", message: data.msg });
        }
      } catch (err) {
        console.error("Error saving user:", err);
        setAlertData({
          type: "danger",
          message: "Server error. Try again later.",
        });
      }
    } else {
      setAlertData({ type: "danger", message: "Enter valid phone number." });
    }
  };

  // Handle OTP Verify
  const handleOtpSubmit = () => {
    if (otp === serverOtp) {
      console.log("🎉 OTP Verified:", otp);

      setPopup(false);
      setStep(1);
      setPhone("");
      setOtp("");
      setServerOtp("");
      setIsLoggedIn(true); // 🔹 Mark user as logged in
      setAlertData({ type: "success", message: "Login successful!" });
      navigate("/home");
    } else {
      setAlertData({ type: "danger", message: "Invalid OTP. Try again." });
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false); // 🔹 Reset login state
    setAlertData({ type: "success", message: "You have been logged out." });
    navigate("/");
  };

  return (
    <>
      {/* 🔹 Global Alert (fixed below navbar) */}
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: 0,
          right: 0,
          zIndex: 1050,
        }}
      >
        <div className="container">
          <Alert
            type={alertData.type}
            message={alertData.message}
            onClose={() => setAlertData({ type: "", message: "" })}
          />
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top border-bottom px-3">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <div className="fw-bold fs-3 text-warning">
            blink<span className="text-success">it</span>
          </div>

          <div className="d-flex align-items-center flex-grow-1 mx-4">
            <div className="me-4">
              <h6 className="mb-0 fw-bold">Delivery in 12 minutes</h6>
              <small className="text-muted">Shop No 4 Gurudwara Market G...</small>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder='Search "sugar"'
            />
          </div>

          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <button className="btn btn-danger me-3" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button
                className="btn btn-link text-dark me-3"
                onClick={() => setPopup(true)}
              >
                Login
              </button>
            )}
            <button className="btn btn-secondary">My Cart</button>
          </div>
        </div>
      </nav>

      {/* 🔹 Login Popup */}
      {popup && !isLoggedIn && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "350px",
              textAlign: "center",
            }}
          >
            {step === 1 && (
              <>
                <h4 className="fw-bold">India last minute app</h4>
                <p className="text-muted">Log in or Sign up</p>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button
                  className="btn btn-dark w-100 mb-2"
                  onClick={handlePhoneSubmit}
                >
                  Continue
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h4 className="fw-bold">Enter OTP</h4>
                <p className="text-muted">We sent an OTP to {phone}</p>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  className="btn btn-dark w-100 mb-2"
                  onClick={handleOtpSubmit}
                >
                  Verify OTP
                </button>
              </>
            )}

            <button
              className="btn btn-outline-secondary btn-sm mt-2"
              onClick={() => {
                setPopup(false);
                setStep(1);
                setPhone("");
                setOtp("");
                setServerOtp("");
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
