import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  { name: "Paan Corner", img: "img1" },
  { name: "Dairy, Bread & Eggs", img: "img2" },
  { name: "Fruits & Vegetables", img: "img3" },
  { name: "Cold Drinks & Juices", img: "img4" },
  { name: "Snacks & Munchies", img: "img5" },
  { name: "Breakfast & Instant Food", img: "img6" },
  { name: "Sweet Tooth", img: "img7" },
  { name: "Bakery & Biscuits", img: "img8" },
  { name: "Tea, Coffee & Health Drink", img: "img9" },
  { name: "Atta, Rice & Dal", img: "img10" },
  { name: "Masala, Oil & More", img: "img11" },
  { name: "Sauces & Spreads", img: "img12" },
  { name: "Chicken, Meat & Fish", img: "img13" },
  { name: "Organic & Healthy Living", img: "img14" },
  { name: "Baby Care", img: "img15" },
  { name: "Pharma & Wellness", img: "img16" },
  { name: "Cleaning Essentials", img: "img17" },
  { name: "Home & Office", img: "img18" },
  { name: "Personal Care", img: "img19" },
  { name: "Pet Care", img: "img20" },
];

function Categories() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {categories.map((cat, index) => (
          <div key={index} className="col-6 col-md-3 text-center">
            <img
              src={cat.img}
              alt={cat.name}
              className="img-fluid rounded mb-2"
            />
            <p className="fw-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
