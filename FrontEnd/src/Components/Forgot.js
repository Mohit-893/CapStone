import axios from 'axios';
import React, { Component } from 'react';

class Forgot extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email
        };

        axios.post('forgot',data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Forgot Password</h3>

                

                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder='Email' 
                    onChange={e => this.email = e.target.value}/>
                </div>



                <button className='btn btn-primary btn-block'>Submit</button>

            </form>
        );
    }
}

export default Forgot;