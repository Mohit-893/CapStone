import React, { useState } from "react";
import { useLocation, Navigate} from 'react-router-dom';
import axios from 'axios';


function PostReply(props) {
    const location = useLocation();
    const { question,name,id, userid} = location.state;
    const [comment,setComment] = useState('');
    const[success,setSuccess] = useState(false)

    const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      UserId:parseInt(userid),
      Comment:comment,
      postId:parseInt(id),
    }

    axios.post("https://localhost:44384/api/forum/postanswer",data).then(res =>{
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
    }
    else{

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <h4>{question}</h4>
      <span>{name}</span><br/><br/>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Type your Answer here</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4" onChange={e => setComment(e.target.value)}
        ></textarea>
      </div>
      <br />
      <br />
      <div>
        <button className="btn btn-primary">Submit Question</button>
      </div>
      </form>
      <br/>
      <h4>Previous Comments:</h4>
      <div>
      {/* {array.forEach(element => {
        
    });} */}
      </div>
      
    </div>
  );
    }
}

export default PostReply;
