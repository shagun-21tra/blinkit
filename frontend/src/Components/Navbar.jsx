// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // import useNavigate
// import Home from "../Pages/Home.jsx";
// function Navbar() {
//   const navigate = useNavigate(); // initialize navigate
//   const [popup, setPopup] = useState(false);
//   const [step, setStep] = useState(1); // 1 = phone input, 2 = OTP input
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   const handlePhoneSubmit = () => {
//     if (phone.length === 10) {
//       console.log("Phone number:", phone); // log phone
//       setStep(2); // move to OTP step
//     } else {
//       alert("Enter a valid 10-digit number");
//     }
//   };

//   const handleOtpSubmit = () => {
//     if (otp.length === 6) {
//       console.log("OTP entered:", otp); // log OTP
//       setPopup(false); // close modal
//       setStep(1); // reset steps
//       setPhone("");
//       setOtp("");
//       navigate("/home"); // redirect to homepage
//     } else {
//       alert("Enter a 6-digit OTP");
//     }
//   };

//   return (
//     <>
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
//             <button className="btn btn-link text-dark me-3" onClick={() => setPopup(true)}>Login</button>
//             <button className="btn btn-secondary">My Cart</button>
//           </div>
//         </div>
//       </nav>

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
//                 <h4 className="fw-bold">India's last minute app</h4>
//                 <p className="text-muted">Log in or Sign up</p>

//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   placeholder="Enter mobile number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <button className="btn btn-dark w-100 mb-2" onClick={handlePhoneSubmit}>Continue</button>
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
//                 <button className="btn btn-dark w-100 mb-2" onClick={handleOtpSubmit}>Verify OTP</button>
//               </>
//             )}

//             <button
//               className="btn btn-outline-secondary btn-sm mt-2"
//               onClick={() => {
//                 setPopup(false);
//                 setStep(1);
//                 setPhone("");
//                 setOtp("");
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





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [step, setStep] = useState(1); // 1 = phone input, 2 = OTP input
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState(""); // store mock OTP from backend

  //Handle Phone Submit → Save to DB + Generate OTP
  const handlePhoneSubmit = async () => {
    if (phone.length === 10) {
      try {
        const res = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone }),
        });

        const data = await res.json();
        console.log(" Saved user:", data);

        // Mock OTP (random 6-digit)
        const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setServerOtp(generatedOtp);
        console.log(" OTP sent:", generatedOtp);

        setStep(2); // move to OTP step
      } catch (err) {
        console.error("Error saving user:", err);
        alert("Failed to save user. Try again.");
      }
    } else {
      alert("Enter a valid 10-digit number");
    }
  };

  // ✅ Handle OTP Verify
  const handleOtpSubmit = () => {
    if (otp === serverOtp) {
      console.log("🎉 OTP Verified:", otp);

      // Reset states
      setPopup(false);
      setStep(1);
      setPhone("");
      setOtp("");
      setServerOtp("");

      navigate("/home"); // redirect to homepage
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <>
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
            <button
              className="btn btn-link text-dark me-3"
              onClick={() => setPopup(true)}
            >
              Login
            </button>
            <button className="btn btn-secondary">My Cart</button>
          </div>
        </div>
      </nav>

      {/* 🔹 Login Popup */}
      {popup && (
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
                <h4 className="fw-bold">India's last minute app</h4>
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
