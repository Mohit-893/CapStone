import React, { useState,useEffect } from "react";


function Weather(props) {
  const [city, setcity] = useState("");
  const [post, setPost] = useState("");
  const [state, setState] = useState(false);
  let access_token = "0653063a7b472ac20274d9bb8a70a80c";
  let url = `http://api.weatherstack.com/current?access_key=${access_token}&query=${city}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
        setState(true)
      });
    console.log(post);
    document.getElementById(
      "textareaforwheather"
    ).innerHTML = `${post.current.temperature}^C`;
  };

  useEffect(() => {
    if (state) {
      console.log(state);
    }
  }, [state]);

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <strong>Know About Your Surroundings</strong>
            </label>
            <div>
              Temperature : <span id="textareaforwheather"></span>
            </div>
            <div id="textareaforwheather"></div>
            <input
              type="text"
              className="form-control"
              placeholder="city"
              onChange={(e) => setcity(e.target.value)}
            />
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Weather;
