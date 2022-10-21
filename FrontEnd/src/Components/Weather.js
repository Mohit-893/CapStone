// import { useState } from "react";
import React,{useState}from 'react';
import axios from 'axios';

function Weather(props) {

    const [city, setcity] = useState('');
    const [post, setPost] = useState('');
    const [state,setState] = useState('');
    let access_token = '0653063a7b472ac20274d9bb8a70a80c';
    let url = `http://api.weatherstack.com/current?access_key=${access_token}&query=${city}`;


    const handleSubmit = async(e) => {
        e.preventDefault();
        // axios.get(url).then((res) => {
        //     setPost=res.data;
        //     console.log(post);
        //     setState = true;
        // }).catch(err => {
        //     console.log(err);
        // })
        fetch(url).then((res) => res.json()).then((json) => {
            setPost(json);
        })
        console.log(post)
        document.getElementById('textareaforwheather').innerHTML = `Temperature: ${post.current.temperature}^C`;
        
    }

    React.useEffect(() => {
        if(state){
            console.log(state);
        }
      }, []);


    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    
                    <label>Know About Your Surroundings</label>
                    <div id='textareaforwheather'></div>
                    <input type="text" className="form-control" placeholder='city' 
                    onChange={(e) => setcity(e.target.value)}/>
                    <button className='btn btn-primary'>Login</button>
                    
                </div>
            </form>
        </div>

{/* <div className='my-3'>
<div class="card">
<div class="card-body">
  <h6 class="card-title">Know About Your Surroundings</h6>
  <div id='textareaforwheather'></div>
  <p class="card-text">
   <input type="text" placeholder='Enter your City' onChange={(e) => setcity(e.target.value)}/>
   <button className='btn btn-primary' onClick={() => {this.handleSubmit()}}>Search</button>
  </p>
</div>
</div>
<div></div>
</div> */}
</>
    );
}

export default Weather;