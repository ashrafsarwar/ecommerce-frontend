import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import "./Offers.css";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON THE BEST SELLERS PAGE</p>
        <Link to="/exclusive">
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt=""></img>
      </div>
    </div>
  );
}

export default Offers;
