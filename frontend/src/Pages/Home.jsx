import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/common/Navbar/Navbar.jsx";
import Categories from "../Components/Categories.jsx";
 function HomePage() {
  return (
    <>
    {/* <Navbar/> */}
       <div className="container py-4">

      {/* Paan Corner Banner */}
     {/* Paan Corner Banner */}
<div className="row bg-success rounded p-4 mb-4">
  <div className="col-12 text-center">
    <img
      src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
      alt="paan banner"
      className="img-fluid rounded"
    />
  </div>
</div>

      {/* Three Small Banners */}
      <div className="row g-4">
        {/* Pharmacy */}
        <div className="col-md-4">
          <div className="rounded overflow-hidden shadow-sm">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg"
              alt="pharmacy"
              className="img-fluid w-100"
            />
            <div className="p-3 text-center">
              <button className="btn btn-info fw-semibold text-white">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Pet Care */}
        <div className="col-md-4">
          <div className="rounded overflow-hidden shadow-sm">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg"
              alt="pet care"
              className="img-fluid w-100"
            />
            <div className="p-3 text-center">
              <button className="btn btn-warning fw-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Baby Care */}
        <div className="col-md-4">
          <div className="rounded overflow-hidden shadow-sm">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"
              alt="baby care"
              className="img-fluid w-100"
            />
            <div className="p-3 text-center">
              <button className="btn btn-dark fw-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Categories/>
    </>
  );
}
export default HomePage;
