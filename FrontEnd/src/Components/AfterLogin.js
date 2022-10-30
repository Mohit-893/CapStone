import React, { useState } from "react";
import { Link } from "react-router-dom";

function AfterLogin(props) {
  const [thumbsup, setthumbsup] = useState(
    <i className="bi bi-hand-thumbs-up"></i>
  );
  const [thumbsdown, setthumbsdown] = useState(
    <i className="bi bi-hand-thumbs-down"></i>
  );
  const [up, setUp] = useState(false);
  const [down, setdown] = useState(false);
  const [countlike, setCountlike] = useState(props.likes)
  const [countdislikes, setCountdislikes] = useState(props.dislikes)

  const setthumbsupbutton = () => {
    if (!up && !down) {
      setthumbsup(<i className="bi bi-hand-thumbs-up-fill"></i>);
      setUp(true);
      setCountlike(countlike+1);
    }
    if (!up && down) {
      setthumbsup(<i className="bi bi-hand-thumbs-up-fill"></i>);
      setUp(true);
      setCountlike(countlike+1);
      setthumbsdown(<i className="bi bi-hand-thumbs-down"></i>);
      setdown(false);
      setCountdislikes(countdislikes-1);
    }
    if (!up) {
      setthumbsup(<i className="bi bi-hand-thumbs-up-fill"></i>);
      setUp(true);
      setCountlike(countlike+1);
    }
    if (up) {
      setthumbsup(<i className="bi bi-hand-thumbs-up"></i>);
      setUp(false);
      setCountlike(countlike-1)
    }
  };

  const setthumbsdownbutton = () => {
    if (!down && !up) {
      setthumbsdown(<i className="bi bi-hand-thumbs-down-fill"></i>);
      setdown(true);
      setCountdislikes(countdislikes+1)
    }
    if (!down && up) {
      setthumbsup(<i className="bi bi-hand-thumbs-up"></i>);
      setUp(false);
      setCountlike(countlike-1)
      setthumbsdown(<i className="bi bi-hand-thumbs-down-fill"></i>);
      setdown(true);
      setCountdislikes(countdislikes+1)
    }
    if (!down) {
      setthumbsdown(<i className="bi bi-hand-thumbs-down-fill"></i>);
      setdown(true);
      setCountdislikes(countdislikes+1);
    }
    if (down) {
      setthumbsdown(<i className="bi bi-hand-thumbs-down"></i>);
      setdown(false);
      setCountdislikes(countdislikes-1)
    }
  };
  return (
    <div
      className="post rounded-5"
      style={{ border: "1px solid goldenrod", padding: "20px" }}
    >
      <div className="post_info">
        <h4>
          <center>{props.title}</center>
        </h4>
      </div>
      <div className="post_body">
        <p>{props.body}</p>
       <strong>Posted by: </strong><button className="btn btn-light rounded-pill">{props.name}</button>
        <br />
      </div>
      <br />
      <div className="container-fluid">
        <div className="row">
          {countlike}
          <div className="col" onClick={setthumbsupbutton}>
            {" "}
            {thumbsup}
          </div>
          {countdislikes}
          <div className="col" onClick={setthumbsdownbutton}>
            {thumbsdown}
          </div>
          {props.views}
          <div className="col">
            <i className="bi bi-eye"></i>
          </div>
          <div className="col">
            <Link
              to={"/comment"}
              state={{
                question: props.title,
                name: props.name,
                id: props.id,
                userid: props.userid,
              }}
            >
              <i className="bi bi-chat-left-dots"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterLogin;
