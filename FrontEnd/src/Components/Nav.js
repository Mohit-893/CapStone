import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import AfterLogin from "./Header/AfterLogin";
import BeforeLogin from "./Header/BeforeLogin";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  handleAskQuestion = () => {
    alert('Sorry for now we dont have this feature now!!!')
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.setState({islogin:''});
    // <Navigate to="/login" />
  };

  render() {
    let buttons;
    if (this.props.state) {
      buttons = (
        <ul className="navbar-nav ml-auto mx-auto">
          <li className="nav-item">
            <Link to={"/question"} onClick={this.handleAskQuestion} className="nav-link">
              Ask Question?
            </Link>
          </li>
          <li className="nav-item px-md-4">
            <Link to={"/login"} onClick={this.handleLogout} className="nav-link">
              Logout
            </Link>
          </li>
          <li className="nav-item px-md-4">
            <Link className="nav-link">
              Hi, {this.props.name}
            </Link>
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
    if(this.props.state){
      return (
        <AfterLogin buttons={buttons}/>
      );
    }else{
      return(
        <BeforeLogin buttons={buttons}/>
      );
    }
    
  }
}

Nav.propTypes = {};

export default Nav;
