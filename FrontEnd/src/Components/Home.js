import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Feed from './Feed';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()).then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
    }
    
    render() {


        const { DataisLoaded, items} = this.state;
        if(!DataisLoaded) return <div><h1>Wait for some time...</h1></div>

        if(this.props.user){
            return (
                <h2>Hi {this.props.user.first_name} {this.props.user.last_name}</h2>
            )
        }
        return (
            <div>
            {/* <h2>You are not logged in</h2> */}
            {
                items.map((item) => (
                    // <ol key = {item.id}>
                    //     UserName: {item.username},
                    //     FullName: {item.name},
                    //     Email : {item.email}
                    // </ol>
                    <>
                    <Feed id={item.id} name={item.name} email={item.email} body={item.body}/>
                    <br/>
                    </>
                    
                ))
            }
            </div>
        );
    }
}


export default Home;
