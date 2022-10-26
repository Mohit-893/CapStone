import React, { useState} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import axios from 'axios';

function AskQuestion(props) {
    const location = useLocation();
    const {user} = location.state;
    const[cat,setCat] = useState(0)
    const[ques, setques] = useState('')
    const[success,setSuccess] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            categoryId:parseInt(cat),
            title:`${ques}`,
            authorName:`${props.name}`,
            body:"No one answer your question yet",
            UserId:parseInt(user)
        }
        console.log(data); 
        axios.post("https://localhost:44384/api/forum/addquestion",data).then(res =>{
            console.log(res);
                setSuccess(true);

            }).catch(err => {
                console.log(err);
            })
            console.log(data);   
    }

    if(success){
        return(
            <div>
                <Navigate to={"/"}/>
            </div>
        )
    }else{

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h4>Enter Details below: </h4>
            <div className="form-group">
            <label>Type your question here</label>
            <textarea className="form-control" rows="4" onChange={e => setques(e.target.value)}></textarea>
            </div>
            <br/>
            <div>
            <label>Select Question category from dropdown</label>
                <select className="form-control" name="category" onChange={e => setCat(e.target.value)} style={{width:'45%'}}>
                    <option value="0">Select any category </option>
                    <option value="1">History</option>
                    <option value="2">Technology</option>
                    <option value="3">Business</option>
                    <option value="4">Cooking</option>
                    <option value="5">Science</option>
                    <option value="6">Motivational Quotes</option>
                    <option value="7">Health</option>
                    <option value="8">Fashion</option>
                </select>
            </div>
            <br/>
            <div>
           <button className='btn btn-primary'>Submit Question</button>
            </div>
            </form>
        </div>
    );
    }
}

export default AskQuestion;