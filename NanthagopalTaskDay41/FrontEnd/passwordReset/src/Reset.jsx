import React, { Component } from "react";
import axios from 'axios'; 

export default class Reset extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const { email } = this.state;

        axios.post("http://localhost:5000/reset-password", {
            email, 
        })
        .then((response) => {
            console.log(response.data, "userRegister");
            alert(response.data.status);
        })
        .catch((error) => {
            console.error(error);
            alert("An error occurred during password reset.");
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Reset Password</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e)=> this.setState({email: e.target.value})}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <p className="reset-password text-right">
                    <a href="/sign-up">Sign Up</a>
                </p>
            </form>
        );
    }
}
