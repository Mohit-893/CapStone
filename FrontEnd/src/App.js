import React, { Component } from "react";
import "./App.css";
import jwt_decode from "jwt-decode";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from "./Components/Forgot";
import LeftSideBar from "./Components/LeftSideBar";
import Weather from "./Components/Weather";
import RandomJoke from "./Components/RandomJoke";
import Tasktodo from "./Components/Tasktodo";
import AskQuestion from "./Components/AskQuestion";
import PostReply from "./Components/PostReply";
import PostsByCatId from "./Components/PostsByCatId";
import PostbySearchKeyword from "./Components/PostbySearchKeyword";
import UserDashboard from "./Components/UserDashboard";
import UserProfile from "./Components/UserProfile";

export default class App extends Component {
  state = {
    islogin: "",
    username: "",
    post: "",
    userId: "",
    category: "",
  };

  componentDidMount() {
    if (localStorage.getItem("userDetails")) {
      const token = localStorage.getItem("userDetails");
      let decoded = jwt_decode(token);
      this.setState({
        islogin:true,
        username:decoded.GivenName,
        userId:decoded.userId,
      })
    }
  }

  pull_data = (data, name) => {
    this.setState({
      islogin: data,
      username: name,
    });
  };

  pull_userId = (id) => {
    this.setState({
      userId: id,
    });
  };

  pull_post = (data) => {
    this.setState({
      post: data,
    });
  };

  render() {
    const { islogin, username, userId } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Nav state={islogin} name={username} user={this.state.userId} />
          <br />
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center">
            <div className="leftbar">
              <LeftSideBar state={islogin} user={userId} />
            </div>
            <div className="auth-inner">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Home
                      state={islogin}
                      name={username}
                      user={this.state.userId}
                    />
                  }
                />
                <Route
                  exact
                  path="/login"
                  element={
                    <Login func={this.pull_data} func2={this.pull_userId} />
                  }
                />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/forgot" element={<Forgot />} />
                <Route
                  exact
                  path="/question"
                  element={<AskQuestion name={username} />}
                />
                <Route exact path="/comment" element={<PostReply />} />
                <Route exact path="/useractivity" element={<UserDashboard />} />
                <Route exact path="/userprofile" element={<UserProfile/>} />
                <Route exact path="/postbycatId" element={<PostsByCatId />} />
                <Route
                  exact
                  path="/postbySearchKeyword"
                  element={<PostbySearchKeyword />}
                />
              </Routes>
            </div>
            <div className="rightbar">
              <RandomJoke />
              <Tasktodo />
              <Weather />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
