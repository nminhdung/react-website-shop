import React from "react";
import "../../index.css";
import "./banner.css";

function Banner() {
  return <section className="banner grid wide">
      <div className="row">
          <div className="col l-6 m-6 c-6">
              <img src="./images/banner1.png" alt="banner1" className="banner-img" />
          </div>
          <div className="col l-6 m-6 c-6">
              <img src="./images/banner2.png" alt="banner2" className="banner-img" />
          </div>
      </div>
      <div className="row">
      <div className="col l-12 m-12 c-12">
              <img src="./images/banner3.jpg" alt="banner1" className="banner-img" />
          </div>
      </div>
  </section>;
}

export default Banner;
