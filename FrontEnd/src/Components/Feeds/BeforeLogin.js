import React,{useState} from 'react';

function BeforeLogin(props) {
    const [thumbsup, setthumbsup] = useState(<i class="bi bi-hand-thumbs-up"></i>);
    const [thumbsdown, setthumbsdown] = useState(<i class="bi bi-hand-thumbs-down"></i>);
    const [up,setUp] = useState(false);
    const [down,setdown] = useState(false);


    // const down = () => {
    //     if({thumbsup} == <i class="bi bi-hand-thumbs-up-fill"></i>){
    //         setthumbsup(<i class="bi bi-hand-thumbs-up"></i>);
    //         setthumbsdown(<i class="bi bi-hand-thumbs-down-fill"></i>);
    //     }
    // }

   
    return (
        <div className='post'  style={{border:'1px solid goldenrod',padding:'20px'}}>
            <div className='post_info'>
                <h4><center>{props.title}</center></h4>
                <small>{props.id}</small>
            </div>
            <div className='post_body' style={{filter: 'blur(2px)'}}>
                <p >{props.body}</p>
                <button className='post_btnAnswer'>{props.name}</button><br/>
            </div >
            <div class="container-fluid"><br/>
                <div class="row" style={{filter:'blur(1px)'}}>
                    {props.likes}<div class="col">{thumbsup}</div>
                    {props.dislikes}<div class="col">{thumbsdown}</div>
                    {props.views}<div class="col"><i class="bi bi-eye"></i></div>
                    <div class="col"><i class="bi bi-chat-left-dots"></i></div>
                    <div class="col"><i class="bi bi-share"></i></div>
                </div>
            </div>
        </div>
    );
}

export default BeforeLogin;