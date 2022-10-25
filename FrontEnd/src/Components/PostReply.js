import React from "react";
import { useLocation, Link } from 'react-router-dom';


function PostReply(props) {
    const location = useLocation();
    const { question,name,id } = location.state;


  return (
    <div>
        <form>
      <h4>{question}</h4>
      <span>{name}</span><br/><br/>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Type your Answer here</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
      </div>
      <br />
      <br />
      <div>
        <Link to={'/'} ><button className="btn btn-primary" onClick={() => {alert('Answer updated successfully')}}>Submit Question</button></Link>
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

export default PostReply;
