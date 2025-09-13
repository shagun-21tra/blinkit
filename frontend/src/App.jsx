// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navbar from "./Components/Navbar.jsx"
// import Home from "./Pages/Home.jsx"
// import { Routes, Route , Navigate} from "react-router-dom";
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Routes>
//         {/* <Route path="/home" element={<Home />} /> */}
//          <Route path="/" element={<Navigate to="/home" />} />
//         {/* Add other routes here */}
//       </Routes>
//     </>
//   )
// }

// export default App



import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <>
    <Navbar />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      
         <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
