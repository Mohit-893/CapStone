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
        <h3>Questions Asked by user</h3>
        {post.map((p) => (
          <div className="card">
            <strong>
              <span>{p.title}</span>
            </strong>
            <span style={{ textAlign: "right" }}>PostId:{p.postID}</span>
          </div>
        ))}
      </div>
      <br />
      <div className="conatiner">
        <h3>Comments posts by user</h3>
        {comment.map((c) => (
          <div className="card">
          <strong>
            <span>{c.comment}</span>
          </strong>
          <span style={{ textAlign: "right" }}>on PostId:{c.postID}</span>
        </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
