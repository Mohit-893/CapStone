import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Forgot from './Components/Forgot';
import LeftSideBar from './Components/LeftSideBar';
import Post from './Components/Post';
import Weather from './Components/Weather';
import RandomJoke from './Components/RandomJoke';
import Tasktodo from './Components/Tasktodo';

export default class App extends Component {

  state = {  
    islogin:'',
    username:'',
    post:'',
  };



pull_data = (data,name) =>{
  this.setState({
    islogin:data,
    username:name,
    
  });
}

pull_post = (data) => {
  // console.log(this.state.post);
  this.setState({
    post:data, 
  })
  // console.log(this.state.post);
}

  render(){
    const {islogin ,username } = this.state;
    // console.log(this.state.post);
  return (
    <BrowserRouter>
    <div className="App">
      <Nav state={islogin} name={username}/>
      <br/><br/><br/><br/>
      <div className='d-flex justify-content-center'>
        <div className='leftbar'><LeftSideBar  func={this.pull_post}/></div>
        <div className='auth-inner'>
        <Routes>
            <Route exact path="/" element={<Home state={islogin} name={username}  post={this.state.post}/>} />
            {/* <Route exact path="/" component={()=><Home user={this.state.user}/>} /> */}
            <Route exact path="/login" element={<Login func={this.pull_data}/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/forgot" element={<Forgot/>} />
            <Route exact path="/home" element={<Post state={islogin}/>} />
            <Route exact path="/question" element={<Register/>} />
          </Routes>
        </div>
        <div className='rightbar'>
          <RandomJoke/>
          <Tasktodo/>
          <Weather/>
        </div>
        {/* <div className='rightbar'><Weather/></div> */}

      </div>


    </div>
    </BrowserRouter>



    // <>
    //  <Nav user={this.state.user} setUser={this.setUser}/>
    //   <div className='d-flex justify-content-center'>
    //     <div className='leftbar'><LeftSideBar/></div>
    //     <div className='auth-inner'>
    //       <BrowserRouter>
    //       <Routes>
    //          <Route exact path="/" element={<Home user={this.state.user}/>} />
    //          {/* <Route exact path="/" component={()=><Home user={this.state.user}/>} /> */}
    //          <Route exact path="/login" element={<Login setUser={this.setUser}/>} />
    //          <Route exact path="/register" element={<Register/>} />
    //          <Route exact path="/forgot" element={<Forgot/>} />
    //          <Route exact path="/home" element={<Post/>} />
    //        </Routes>
    //       </BrowserRouter>
    //     </div>
    //     <div className='rightbar'><RandomJoke/></div>
    //   </div>
    // </>
    
  );
  }
}

