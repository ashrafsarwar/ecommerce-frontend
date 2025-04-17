import React, { useState } from "react";
import "./CSs/LoginLogout.css";
import axios from "axios";
import { toast } from "react-hot-toast";

function LoginLogout() {
  const [state, setState] = useState("signin");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signup = async () => {
    const res = await axios.post(
      "http://localhost:3000/users/signup",
      formData
    );
    if (res.data.success) {
      setFormData({ name: "", email: "", password: "" });
      toast.success("Signed up successfully");
      window.location.replace("/");
    } else {
      toast.error("Email already exists. Please try again.");
    }
  };
  const signin = async () => {
    const res = await axios.post(
      "http://localhost:3000/users/signin",
      formData
    );
    if (res.data.success) {
      setFormData({ email: "", password: "" });
      toast.success("Logged in successfully");
      localStorage.setItem("auth-token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      window.location.replace("/");
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };
  return (
    <div className="loginlognout">
      <div className="loginlogout-container">
        {state === "signup" ? <h1>Sign Up</h1> : <h1>Sign In</h1>}
        <div className="loginlogout-fields">
          {state === "signup" && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "signup" ? signup() : signin();
          }}
        >
          Continue
        </button>
        {state === "signup" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setState("signin")}> Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setState("signup")}>Sign Up</span>
          </p>
        )}

        <div className="loginlogout-agree">
          <input type="checkbox" />
          <p>
            I agree to the <span>Terms</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginLogout;
