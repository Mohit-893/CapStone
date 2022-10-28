import React, { useState } from "react";
import { Link } from "react-router-dom";
import flake from "../../images/logo2.png";

function AfterLogin(props) {
  const [keyword, setkeyword] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
      <div className="container collapse navbar-collapse position-relative nav-item px-md-4">
        <div>
          <Link to={"/"} ><img
            src={flake}
            alt=""
            style={{ height: "auto", width: "160px", marginRight: "100px", marginLeft:"-100px" }}
          /></Link>
          {/* <Link
            className="navbar-brand"
            to={"/"}
            style={{ color: "goldenrod", marginRight: "100px" }}
          >
            <i className="bi bi-house"></i>
          </Link> */}
        </div>
        {/* <div className="row mx-md-n5 px-md-4">
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/login"} style={{color:'goldenrod'}}><i className="bi bi-people-fill lead"></i></Link></div>
                           </div>
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/login"} style={{color:'goldenrod'}}><i className="bi bi-bell  lead"></i></Link></div>
                           </div>
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/lo"} style={{color:'goldenrod'}}><i className="bi bi-clipboard2-check lead"></i></Link></div>
                           </div>
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/post"} style={{color:'goldenrod'}}><i className="bi bi-card-checklist lead"></i></Link></div>
                           </div>
                       </div> */}
        <div  style={{marginLeft:"100px"}}>
          <form className="d-flex px-md-4 ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setkeyword(e.target.value)}
            />
            <div className="srch">
              <Link
                to="/postbySearchKeyword"
                state={{ key: keyword, user: props.user }}
              >
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </Link>
            </div>
          </form>
        </div>

        <div className="collapse navbar-collapse">{props.buttons}</div>
      </div>
    </nav>
  );
}

export default AfterLogin;
