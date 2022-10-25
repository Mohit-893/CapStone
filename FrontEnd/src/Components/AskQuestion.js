import React from 'react';
import {Link} from 'react-router-dom';

function AskQuestion(props) {
    // const handleSubmit = () => {
    //     alert("Thanks for patience \n Your question is saved...")
    // }
    return (
        <div>
            <form>
            <h4>Enter Details below: </h4>
            <div class="form-group">
            <label for="exampleFormControlTextarea1">Type your question here</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <br/>
            <div>
            <label>Select Question category from dropdown</label>
                <select class="form-control" style={{width:'45%'}}>
                    <option>Select any category </option>
                    <option>History</option>
                    <option>Technology</option>
                    <option>Business</option>
                    <option>Cooking</option>
                    <option>Science</option>
                    <option>Motivational Quotes</option>
                    <option>Health</option>
                    <option>Fashion</option>
                </select>
            </div>
            <br/>
            <div>
            <Link to={'/'} ><button className='btn btn-primary' onClick={() => {alert("Your question is submitted succesfully")}}>Submit Question</button></Link>
            </div>
            </form>
        </div>
    );
}

export default AskQuestion;