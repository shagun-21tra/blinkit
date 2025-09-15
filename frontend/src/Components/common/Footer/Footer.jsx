import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer bg-white text-dark border-top">
      <div className="container py-5">
        <div className="row">

          {/* Useful Links */}
          <div className="col-lg-3 col-md-4 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <div className="row footer-links">
              <div className="col-6">
                <ul className="list-unstyled mb-0">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled mb-0">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Warehouse</a></li>
                  <li><a href="#">Partner</a></li>
                  <li><a href="#">Franchise</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="col-lg-9 col-md-8">
            <div className="d-flex align-items-center mb-3">
              <h5 className="fw-bold mb-0 me-3">Categories</h5>
              <a href="#" className="text-success small">see all</a>
            </div>

            <div className="row">
              <div className="col-6 col-md-3 mb-3">
                <ul className="list-unstyled mb-0">
                  <li>Vegetables & Fruits</li>
                  <li>Cold Drinks & Juices</li>
                  <li>Bakery & Biscuits</li>
                  <li>Dry Fruits, Masala & Oil</li>
                </ul>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <ul className="list-unstyled mb-0">
                  <li>Dairy & Breakfast</li>
                  <li>Instant & Frozen Food</li>
                  <li>Sweet Tooth</li>
                  <li>Sauces & Spreads</li>
                </ul>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <ul className="list-unstyled mb-0">
                  <li>Munchies</li>
                  <li>Tea, Coffee & Health Drinks</li>
                  <li>Atta, Rice & Dal</li>
                  <li>Chicken, Meat & Fish</li>
                </ul>
              </div>

              <div className="col-6 col-md-3 mb-3">
                <ul className="list-unstyled mb-0">
                  <li>Baby Care</li>
                  <li>Home & Office</li>
                  <li>Pet Care</li>
                  <li>Kitchen & Dining</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright, app buttons, social */}
        <div className="row align-items-center mt-4 pt-3 border-top">
          <div className="col-md-4 text-center text-md-start mb-2 mb-md-0">
            <small className="text-muted">© Blink Commerce Private Limited, 2016-2025</small>
          </div>

          <div className="col-md-4 text-center mb-2 mb-md-0">
            <div className="d-inline-flex gap-2">
              <a className="btn btn-outline-dark btn-sm app-btn" href="#" role="button" aria-label="App Store">
                <i className="bi bi-apple me-2" aria-hidden="true"></i>
                App Store
              </a>
              <a className="btn btn-outline-dark btn-sm app-btn" href="#" role="button" aria-label="Google Play">
                <i className="bi bi-google me-2" aria-hidden="true"></i>
                Google Play
              </a>
            </div>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <a href="#" className="social-btn me-2" aria-label="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-btn me-2" aria-label="x"><i className="bi bi-x"></i></a>
            <a href="#" className="social-btn me-2" aria-label="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="social-btn me-2" aria-label="linkedin"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="social-btn" aria-label="email"><i className="bi bi-envelope"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
