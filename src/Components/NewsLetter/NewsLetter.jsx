import React from "react";
import "./NewsLetter.css";
import { toast } from "react-hot-toast";
import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email </h1>
      <p>Subscribe to our Newsletter to get updated!</p>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email id"
        />
        <button
          onClick={() => {
            setEmail("");
            toast.success("Subscribed Successfully");
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
