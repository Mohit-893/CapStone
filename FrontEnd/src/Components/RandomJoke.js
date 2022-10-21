
import React, { Component } from "react";



class RandomJoke extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{
        setup:'',
        punchline:'',
      }],
      DataisLoaded: true,
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
  refreshPage() {
    this.setState({
      items:[],
      DataisLoaded: false,
    })

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
  render() {
    const { DataisLoaded, items } = this.state;
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
            <a href="#" class="btn btn-primary" onClick={() => {this.refreshPage()}}>Refresh</a>
          </div>
        </div>
        <div></div>
      </>
    );
  }
}
export default RandomJoke;