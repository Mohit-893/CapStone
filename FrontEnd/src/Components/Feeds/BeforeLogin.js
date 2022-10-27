import React from "react";

function BeforeLogin(props) {
  return (
    <div
      className="post"
      style={{ border: "1px solid goldenrod", padding: "20px" }}
    >
      <div className="post_info">
        <h4>
          <center>{props.title}</center>
        </h4>
        <small>{props.id}</small>
      </div>
      <div className="post_body" style={{ filter: "blur(2px)" }}>
        <p>{props.body}</p>
        <button className="post_btnAnswer">{props.name}</button>
        <br />
      </div>
      <div className="container-fluid">
        <br />
        <div className="row" style={{ filter: "blur(1px)" }}>
          {props.likes}
          <div className="col">
            <i className="bi bi-hand-thumbs-up"></i>
          </div>
          {props.dislikes}
          <div className="col">
            <i className="bi bi-hand-thumbs-down"></i>
          </div>
          {props.views}
          <div className="col">
            <i className="bi bi-eye"></i>
          </div>
          <div className="col">
            <i className="bi bi-chat-left-dots"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeforeLogin;
