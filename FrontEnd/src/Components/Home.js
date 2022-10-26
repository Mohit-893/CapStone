import React, { Component  } from 'react';
import BeforeLogin from './Feeds/BeforeLogin';
import AfterLogin from './Feeds/AfterLogin';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            category:this.props.post,
        };
        console.log(this.state.category)
    }

    componentDidMount(){
        console.log(this.props.post);
        fetch(`https://localhost:44384/api/forum/allposts/${this.props.post}`).then((res) => res.json()).then((json) => {
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
                        <AfterLogin id={item.postID} name={item.authorName} title={item.title} body={item.body} likes={item.likes} dislikes={item.dislikes} views={item.viewsCount} userid={this.props.user}/>
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
                        <BeforeLogin id={item.postID} name={item.authorName} title={item.title} body={item.body} likes={item.likes} dislikes={item.dislikes} views={item.viewsCount}/>
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
