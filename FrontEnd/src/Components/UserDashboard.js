import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function UserDashboard(props) {
  const location = useLocation();
  const { user } = location.state;

  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:44384/api/forum/getpostbyuserid/${user}`)
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
      });
    fetch(`https://localhost:44384/api/forum/getcommentbyuserid/${user}`)
      .then((res) => res.json())
      .then((json) => {
        setComment(json);
      });
  });
  return (
    <div>
      <div className="container">
        <h3 className="text-center">Questions Asked by user</h3>
        {post.map((p) => (
          <div className="card rounded-2 my-2">
            <strong>
              <span className="mx-2">{p.title}</span>
            </strong>
            <span style={{ textAlign: "right", fontSize:'0.8rem'}}>PostId:{p.postID}</span>
          </div>
        ))}
      </div>
      <br />
      <br/>
      <div className="conatiner">
        <center><h3>Comments posts by user</h3></center>
        {comment.map((c) => (
          <div className="card rounded-2 my-2">
          <strong>
            <span className="mx-2">{c.comment}</span>
          </strong>
          <span style={{ textAlign: "right", fontSize:'0.8rem'}}>PostId:{c.postID}</span>
        </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
