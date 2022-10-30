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
        localStorage.setItem("userDetails", res.data);
        setTimeout(()=>{
          localStorage.removeItem("userDetails");
        },(1000*60*15))
        
        const token = localStorage.getItem("userDetails");
        let decoded = jwt_decode(token);
        setJwtToken(decoded);
        setSuccess(true);
        props.func(success, decoded.GivenName);
        props.func2(decoded.userId);
      })
      .catch((err) => {
        alert("Wrong Password!!!");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      
      const token = localStorage.getItem("userDetails");
      let decoded = jwt_decode(token);
      setJwtToken(decoded);
      setSuccess(true);
      props.func(success, decoded.GivenName);
      props.func2(decoded.userId);
    }
  }, [success],[JwtToken]);

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
          </div><br/>

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
