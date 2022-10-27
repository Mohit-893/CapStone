import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const [success, setSuccess] = useState(false);
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [JwtToken, setJwtToken] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Username: Username,
      Password: Password,
    };

    await axios
      .post("https://localhost:44384/Api/login/gettoken", data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        // console.log(data);
        alert("login done");
        setSuccess(true);
        const token = res.data;
        let decoded = jwt_decode(token);
        setJwtToken(decoded);
        props.func(true, data.Username);
        props.func2(decoded.userId);
      })
      .catch((err) => {
        alert("Wrong Password!!!");
      });
  };

  useEffect(() => {
    if (JwtToken) {
      // console.log("founded",JwtToken);
      console.log(JwtToken);
    }
  }, [JwtToken]);

  return (
    <>
      {success ? (
        <Navigate to={"/"} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
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

          <br />
          <button className="btn btn-primary btn-block">Login</button>
        </form>
      )}
    </>
  );
};

export default Login;
