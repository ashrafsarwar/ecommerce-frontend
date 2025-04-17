import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Shopper</h1>
      <p>
        Welcome to <strong>Shopper</strong>, your go-to destination for a
        seamless online shopping experience. At Shopper, we believe in offering
        the best quality products, a wide selection, and exceptional customer
        service to ensure our customers always leave satisfied.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is simple: to provide a convenient, reliable, and enjoyable
        shopping experience. We carefully curate our product selection to ensure
        you get the latest trends and the best deals, all from the comfort of
        your home.
      </p>
      <h2>Why Choose Shopper?</h2>
      <ul>
        <li>
          <strong>Quality Products:</strong> We hand-pick our products to ensure
          top-notch quality.
        </li>
        <li>
          <strong>Fast Delivery:</strong> We partner with leading delivery
          services to get your items to you quickly and safely.
        </li>
        <li>
          <strong>Customer Support:</strong> Our dedicated support team is here
          to help you every step of the way.
        </li>
        <li>
          <strong>Secure Payments:</strong> We prioritize your security with
          trusted payment gateways.
        </li>
      </ul>
      <h2>Our Vision</h2>
      <p>
        To be a leader in the e-commerce space by continuously enhancing our
        platform to meet the evolving needs of our customers.
      </p>
      <p>Thank you for choosing Shopper. We look forward to serving you!</p>
    </div>
  );
}

export default About;
