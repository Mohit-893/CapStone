import React, { useState } from "react";

function AfterLogin(props) {
  const [thumbsup, setthumbsup] = useState(
    <i class="bi bi-hand-thumbs-up"></i>
  );
  const [thumbsdown, setthumbsdown] = useState(
    <i class="bi bi-hand-thumbs-down"></i>
  );
  const [up, setUp] = useState(false);
  const [down, setdown] = useState(false);

  // const down = () => {
  //     if({thumbsup} == <i class="bi bi-hand-thumbs-up-fill"></i>){
  //         setthumbsup(<i class="bi bi-hand-thumbs-up"></i>);
  //         setthumbsdown(<i class="bi bi-hand-thumbs-down-fill"></i>);
  //     }
  // }

  const setthumbsupbutton = () => {
    if (!up && !down) {
      setthumbsup(<i class="bi bi-hand-thumbs-up-fill"></i>);
      setUp(true);
    }
    if (!up && down) {
      setthumbsup(<i class="bi bi-hand-thumbs-up-fill"></i>);
      setUp(true);
      setthumbsdown(<i class="bi bi-hand-thumbs-down"></i>);
      setdown(false);
    }
    if (!up) {
      setthumbsup(<i class="bi bi-hand-thumbs-up-fill"></i>);
      setUp(true);
    }
    if (up) {
      setthumbsup(<i class="bi bi-hand-thumbs-up"></i>);
      setUp(false);
    }
  };

  const setthumbsdownbutton = () => {
    if (!down && !up) {
      setthumbsdown(<i class="bi bi-hand-thumbs-down-fill"></i>);
      setdown(true);
    }
    if (!down && up) {
      setthumbsup(<i class="bi bi-hand-thumbs-up"></i>);
      setUp(false);
      setthumbsdown(<i class="bi bi-hand-thumbs-down-fill"></i>);
      setdown(true);
    }
    if (!down) {
      setthumbsdown(<i class="bi bi-hand-thumbs-down-fill"></i>);
      setdown(true);
    }
    if (down) {
      setthumbsdown(<i class="bi bi-hand-thumbs-down"></i>);
      setdown(false);
    }
  };
  return (
    <div className="post" style={{border:'1px solid goldenrod',padding:'20px'}}>
      <div className="post_info">
        <h4>
          <center>{props.name}</center>
        </h4>
        <small>{props.id}</small>
      </div>
      <div className="post_body">
        <p>{props.body}</p>
        <button className="post_btnAnswer">{props.email}</button>
        <br />
      </div>
      <br />
      <div class="container-fluid">
        <div class="row">
          <div class="col" onClick={setthumbsupbutton}>
            {" "}
            {thumbsup}
          </div>
          <div class="col" onClick={setthumbsdownbutton}>
            {thumbsdown}
          </div>
          <div class="col">
            <i class="bi bi-repeat"></i>
          </div>
          <div class="col">
            <i class="bi bi-chat-left-dots"></i>
          </div>
          <div class="col" onClick={() => {alert("This feature is in progress"+'\n'+"You may see this feature soon...")}}>
            <i class="bi bi-share"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterLogin;
