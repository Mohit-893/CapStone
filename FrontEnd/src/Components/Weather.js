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
        let doc = document.getElementsByClassName('textareaforwheather');
        doc.innerHTML +=`<div className='container'>${post.current.weather_icons[0]}</div>`
        
    }

    React.useEffect(() => {
        if(state){
            console.log(state);
        }
      }, []);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>City</label>
                    <input type="text" className="form-control" placeholder='city' 
                    onChange={(e) => setcity(e.target.value)}/>
                    <button className='btn btn-primary btn-block'>Login</button>
                    <div className='textareaforwheather'></div>
                </div>
            </form>
        </div>
    );
}

export default Weather;