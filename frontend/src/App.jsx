import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/common/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/common/Footer/Footer.jsx";

function App() {
  return (
    <>
    <Navbar />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      
         <Route path="/home" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
