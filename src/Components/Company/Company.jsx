import React from "react";
import "./Company.css";

function Company() {
  return (
    <div className="company-container">
      <h1>About Shopper</h1>
      <p>
        <strong>Shopper</strong> is your one-stop shop for the best online
        shopping experience. Founded in 2024, we have quickly become a leader in
        e-commerce, delivering top-quality products at affordable prices. Our
        mission is to offer exceptional customer service and an unmatched range
        of goods, from electronics to fashion and everything in between.
      </p>

      <div className="company-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Customer First:</strong> We prioritize customer satisfaction
            above all.
          </li>
          <li>
            <strong>Quality:</strong> We ensure the best quality in all of our
            products.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace technology to enhance your
            shopping experience.
          </li>
          <li>
            <strong>Integrity:</strong> We believe in honesty and transparency
            in everything we do.
          </li>
        </ul>
      </div>

      <div className="company-vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to make online shopping accessible and enjoyable for
          everyone. We are committed to expanding our range of products, using
          cutting-edge technology to ensure fast, secure, and reliable service,
          and helping our customers shop with confidence.
        </p>
      </div>
    </div>
  );
}

export default Company;
