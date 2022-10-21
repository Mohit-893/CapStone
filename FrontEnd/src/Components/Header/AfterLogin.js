import React from 'react';
import {Link} from 'react-router-dom';

function AfterLogin(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
          <div className="container collapse navbar-collapse position-relative nav-item px-md-4">
            <div>
              <Link className="navbar-brand" to={"/"} style={{color:'goldenrod'}}>
              <i class="bi bi-house"></i>
              </Link>
            </div>
            <div className="row mx-md-n5 px-md-4">
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/"} style={{color:'goldenrod'}}><i className="bi bi-people-fill lead"></i></Link></div>
                           </div>
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/"} style={{color:'goldenrod'}}><i className="bi bi-bell  lead"></i></Link></div>
                           </div>
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/"} style={{color:'goldenrod'}}><i className="bi bi-clipboard2-check lead"></i></Link></div>
                           </div>
                           <div className="col px-md-4">
                               <div className="p-2 bg-dark"><Link to={"/"} style={{color:'goldenrod'}}><i className="bi bi-card-checklist lead"></i></Link></div>
                           </div>
                       </div>
            <div>
                      <form className="d-flex px-md-4">
                           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                           <div className='srch'>
                               <button className="btn btn-outline-success" type="submit">Search</button>
                           </div>
                       </form>
            </div>
            
            <div className="collapse navbar-collapse">{props.buttons}</div>
          </div>
        </nav>
    );
}

export default AfterLogin;