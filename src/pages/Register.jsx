import React, { useState } from "react";
import "./Register.css";
import PageNav from "../components/PageNav";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerAs, setRegisterAs] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    //history.push('/Login');
    // alert("You have registered successfully. Now go to login page");
    navigate("/Login");
  };

  return (
    <main>
      <PageNav />
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="eg.  John Verco"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder="eg. your@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder=" password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Register As:</label>
            <div className="register-as-options">
              <input
                type="checkbox"
                id="farmer"
                value="farmer"
                checked={registerAs === "farmer"}
                onChange={(e) => setRegisterAs(e.target.value)}
              />
              <label htmlFor="farmer">Farmer</label>
              <input
                type="checkbox"
                id="consumer"
                value="consumer"
                checked={registerAs === "consumer"}
                onChange={(e) => setRegisterAs(e.target.value)}
              />
              <label htmlFor="consumer">Consumer</label>
            </div>
          </div>
          <div className="form-group">
            <label>Phone No.:</label>
            <input
              type="tel"
              value={phoneNo}
              placeholder="your phone no. xxxxxxxxxx"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <textarea
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
