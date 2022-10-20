
import React, { Component } from "react";



class RandomJoke extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      count: 0,
    };
  }
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        items: json,
        DataisLoaded: true,
        count: 0,
      });
    });
  }
  // refreshPage() {
  //   this.setState2({count: count+1})
  // }
  render() {
    const { DataisLoaded, items, count } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Wait for some time...</h1>
        </div>
      );
    return (
      <>
        {/* <h3>Jokes</h3> */}
        <div class="card">
          {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
          <div class="card-body">
            <h5 class="card-title">Jokes</h5>
            <p class="card-text">
              {items.setup}
              <br />
              {items.punchline}
            </p>
            <p>{count}</p>
            <a href="#" class="btn btn-primary" onClick={() => this.setState({count : this.state.count +1})}>Refresh</a>
          </div>
        </div>
        <div></div>
      </>
    );
  }
}
export default RandomJoke;