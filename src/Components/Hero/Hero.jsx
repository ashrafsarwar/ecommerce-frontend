import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero">
      <div className="left-hero">
        <h2>New Arrival</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="collection-btn">
          <Link to="/latest">
            <button>
              Latest Collection
              <img src={arrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
