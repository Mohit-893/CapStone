import React, { Component, useState } from 'react';
import BeforeLogin from './Feeds/BeforeLogin';
import AfterLogin from './Feeds/AfterLogin';

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

        if(this.props.state){
            return (
                <div>
                    {/* <div>{(this.props.post)}</div> */}
                {
                    items.map((item) => (
                        <>
                        <AfterLogin id={item.id} name={item.name} email={item.email} body={item.body}/>
                        <br/>
                        </> 
                    ))
                }
                </div>
            );
        }
        else{
            return(
                <div>
                    {/* <div>{(this.props.post)}</div> */}
                {
                    items.map((item) => (
                        <>
                        <BeforeLogin id={item.id} name={item.name} email={item.email} body={item.body}/>
                        <br/>
                        </>    
                    ))
                }
                </div>
            );
            
        }
       
    }
}


export default Home;
