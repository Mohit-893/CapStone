import React, { Component } from "react";
import { Link } from "react-router-dom";
import AfterLogin from "./Header/AfterLogin";
import BeforeLogin from "./Header/BeforeLogin";

class Nav extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.setState({ islogin: "" });
  };

  render() {
    let buttons;
    if (this.props.state) {
      buttons = (
        <ul className="navbar-nav ml-auto mx-auto">
          <li className="nav-item">
            <Link
              to={"/question"}
              className="nav-link"
              state={{ user: this.props.user }}
            >
              Ask Question?
            </Link>
          </li>
          <li className="nav-item px-md-4">
            <Link
              to={"/login"}
              onClick={this.handleLogout}
              className="nav-link"
            >
              Logout
            </Link>
          </li>
          <li className="nav-item px-md-4">
            <Link className="nav-link">Hi, {this.props.name}</Link>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className="navbar-nav ml-auto mx-auto">
          <li className="nav-item px-md-4">
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          </li>
          <li className="nav-item px-md-4">
            <Link className="nav-link" to={"/register"}>
              Sign up
            </Link>
          </li>
        </ul>
      );
    }
    if (this.props.state) {
      return <AfterLogin buttons={buttons} user={this.props.user} />;
    } else {
      return <BeforeLogin buttons={buttons} />;
    }
  }
}

Nav.propTypes = {};

export default Nav;
