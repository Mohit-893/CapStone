import React,{useEffect, useState} from 'react';
import { useLocation, Link } from "react-router-dom";

function UserProfile(props) {

    const location = useLocation();
    const { user } = location.state;
    const [item,setItem] = useState([])

    useEffect(()=>{
        // console.log(user);
        fetch(`https://localhost:44384/api/forum/getUserDetails/${user}`).then(res => res.json()).then(json => {
            setItem(json[0]);
        })
        },[user])
    
    return (
        <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src="https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597__340.png" alt="avatar"
              class="rounded-circle img-fluid" style={{width: '150px'}} />
            <h5 class="my-3">{item.firstName} {item.lastName}</h5>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <p class="mb-0">First Name</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{item.firstName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-4">
                <p class="mb-0">Last Name</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{item.lastName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-4">
                <p class="mb-0">Username</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{item.username}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-4">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-8">
                <p class="text-muted mb-0">{item.emailAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to='/useractivity' state={{ user: user}}><button className='btn btn-outline-info'>User Activity</button></Link>
    </div>
    );
}

export default UserProfile;