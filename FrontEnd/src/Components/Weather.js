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

        await axios.get(url).then((res) => {
            setPost=res.data;
            console.log(setPost);
            setState = true;
        }).catch(err => {
            console.log(err);
        })
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
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder='Email' 
                    onChange={(e) =>setcity(e.target.value)}/>
                    <button className='btn btn-primary btn-block'>Login</button>
                    <div className='textareaforwheather'></div>
                </div>
            </form>
        </div>
    );
}

export default Weather;