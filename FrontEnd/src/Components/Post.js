import React from 'react';
import '../CSS/Post.css'

function Post(props) {
    if(props.state){
        return (
            <div className='messageScreen'>
                <center>
                <div className='container'>
                    <h1>Welcome to our GoldFlake</h1>
                    <h4>The feature you are trying to check</h4>
                    <h4>has not implemented yet</h4><br/><br/>
                    <h6>Thanks for you Patience...</h6>
                </div>
                </center>
                
            </div>
        );
    }else{
        return (
            <div className='messageScreen'>
                <center>
                <div className='container'>
                    <h1>Welcome to our GoldFlake</h1>
                    <h4>Ja jake phle login kr</h4>
                    <h4>fir use krna </h4><br/><br/>
                    <h6>bahut ghani meharbani itni der rukn k khatar</h6>
                </div>
                </center>
                
            </div>
        );
    }
    
}

export default Post;