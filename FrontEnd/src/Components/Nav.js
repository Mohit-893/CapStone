import React, { Component } from "react";
import { Link } from "react-router-dom";
import flake from "../images/logo2.png";

class Nav extends Component {
  state = {
    keyword:'',
  }
  handleLogout = () => {
    localStorage.removeItem("userDetails");
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
          <li className="nav-item px-md-4 nav-link">
            Hi, {this.props.name}
          </li>
          <li  className="nav-item px-md-4"><Link to='/userprofile' className="nav-link" state={{ user: this.props.user }}><h4><i class="bi bi-person-circle"></i></h4></Link></li>
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
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
      <div className="container collapse navbar-collapse position-relative nav-item px-md-4">
        <div>
          <Link to={"/"} ><img
            src={flake}
            alt=""
            style={{ height: "auto", width: "160px", marginRight: "100px", marginLeft:"-100px" }}
          /></Link>
        </div>
        <div  style={{marginLeft:"100px"}}>
          <form className="d-flex px-md-4 ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => this.setState({keyword:e.target.value})}
            />
            <div className="srch">
              <Link
                to="/postbySearchKeyword"
                state={{ key: this.state.keyword, user: this.props.user }}
              >
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </Link>
            </div>
          </form>
        </div>

        <div className="collapse navbar-collapse">{buttons}</div>
      </div>
    </nav>
      );
    } else {
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
      <div className="container collapse navbar-collapse position-relative nav-item px-md-4">
        <div>
          <Link to={"/"}><img
            src={flake}
            alt=""
            style={{ height: "auto", width: "160px", marginRight: "160px", marginLeft:"-100px" }}
          /></Link>
        </div>
        <div style={{marginLeft:"100px"}}>
          <form className="d-flex px-md-4">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="srch">
              <Link to="/login">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </Link>
            </div>
          </form>
        </div>

        <div className="collapse navbar-collapse">{buttons}</div>
      </div>
    </nav>
      ); 
    }
  }
}

Nav.propTypes = {};

export default Nav;
