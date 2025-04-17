import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing social media icons
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          At <strong>Shopper</strong>, we’re here to help! Whether you have a
          question about your order, our products, or any other inquiries, feel
          free to reach out to us through any of the channels below.
        </p>

        <div className="contact-details">
          <h2>Customer Support</h2>
          <p>
            Email us at:{" "}
            <a href="mailto:ashrafsarwar542@gmail.com">support@shopper.com</a>
          </p>
          <p>
            Call us at: <a href="tel:+3170695349">+92 (326) 3712430</a>
          </p>

          <h2>Our Office</h2>
          <p>
            Shopper Headquarters <br />
            1234 Market Street, Suite 567 <br />
            City, State, 12345
          </p>

          <h2>Follow Us</h2>
          <p>Stay updated on the latest offers and trends:</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
