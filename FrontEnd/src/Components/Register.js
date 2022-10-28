import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [Username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      FirstName: FirstName,
      LastName: LastName,
      EmailAddress: EmailAddress,
      Password: Password,
      CPassword: CPassword,
      Username: Username,
    };
    if (data.Password !== data.CPassword)
      alert("Password and Confirm Password must be same");
    if (!data.FirstName) alert("First name is Required feild");
    if (!data.LastName) alert("Last name is Required feild");
    if (!data.Username) alert("Please Select a username");

    if (!data.EmailAddress) alert("Email is Required feild");
    else {
      axios
        .post("https://localhost:44384/Api/login/register", data)
        .then((res) => {
          console.log(res);
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(data);
    }
  };

  if (success) {
    return (
      <div>
        <Navigate to={"/login"} />
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>

        <br />
        <button className="btn btn-primary btn-block">Sign Up</button>
      </form>
    );
  }
};

export default Register;
