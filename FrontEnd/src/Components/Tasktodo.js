import React, { Component } from 'react';

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
    
      render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
          return (
            <div>
              <h1>Wait for some time...</h1>
            </div>
          );
    
        return (
          <div className='my-3'>
          <div class="card">

          {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}

          <div class="card-body">

            <h5 class="card-title">Activity</h5>

            <p class="card-text">

             Task to do: {items.activity}

            </p>

            <a href="#" class="btn btn-primary" onClick={this.refreshPage}>Refresh</a>

          </div>

        </div>

        <div></div>

        </div>
        );
      }
}

export default Tasktodo;