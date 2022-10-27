import React, { Component } from "react";

class Tasktodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  refreshPage() {
    this.setState({
      items: [],
      DataisLoaded: false,
    });

    fetch("https://www.boredapi.com/api/activity")
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
    return (
      <div className="my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Activity</h5>
            <p className="card-text">
              <strong>Task to do:</strong> {items.activity}
            </p>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => {
                this.refreshPage();
              }}
            >
              Refresh
            </a>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Tasktodo;
