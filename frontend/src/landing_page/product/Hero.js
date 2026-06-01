import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container border-bottom mt-5 mb-5">
      <div className="row text-center mt-5 mb-5 p-5">
        <h1 className="fs-2">Zerodha Products</h1>
        <h3 className="text-muted fs-5 mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-2">
          Check out{" "}
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            our investment offerings{" "}
            <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Hero;
