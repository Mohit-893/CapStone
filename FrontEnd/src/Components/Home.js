import React, { Component } from "react";
import AfterLogin from "./AfterLogin";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      category: this.props.post,
    };
  }

  componentDidMount() {
    fetch(`https://localhost:44384/api/forum/allposts/`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Wait for some time...</h1>
        </div>
      );

    if (this.props.state) {
      return (
        <div>
          {items.map((item) => (
            <>
              <AfterLogin
                id={item.postID}
                name={item.authorName}
                title={item.title}
                body={item.body}
                likes={item.likes}
                dislikes={item.dislikes}
                views={item.viewsCount}
                userid={this.props.user}
              />
              <br />
            </>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {items.map((item) => (
            <>
              <div
                className="post rounded-5"
                style={{ border: "1px solid goldenrod", padding: "20px" }}
              >
                <div className="post_info">
                  <h4>
                    <center>{item.title}</center>
                  </h4>
                </div>
                <div className="post_body" style={{ filter: "blur(2px)" }}>
                  <p>{item.body}</p>
                  <strong>Posted by: </strong>
                  <button className="btn btn-light rounded-pill">
                    {item.authorName}
                  </button>
                  <br />
                </div>
                <div className="container-fluid">
                  <br />
                  <div className="row" style={{ filter: "blur(1px)" }}>
                    {item.likes}
                    <div className="col">
                      <i className="bi bi-hand-thumbs-up"></i>
                    </div>
                    {item.dislikes}
                    <div className="col">
                      <i className="bi bi-hand-thumbs-down"></i>
                    </div>
                    {item.views}
                    <div className="col">
                      <i className="bi bi-eye"></i>
                    </div>
                    <div className="col">
                      <i className="bi bi-chat-left-dots"></i>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </>
          ))}
        </div>
      );
    }
  }
}

export default Home;
