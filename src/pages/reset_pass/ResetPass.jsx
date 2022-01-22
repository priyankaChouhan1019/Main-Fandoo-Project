import React, { Component } from 'react'
import '../reset_pass/ResetPass.scss'
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserService from '../../service/userservice';

const service = new UserService();

export class ResetPass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirm_password: "",
            passwordError: false,
            confirm_passError: false
        };
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirm_passError = this.state.confirm_password === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.passwordError || error.confirm_passError;

    }

    next = () => {
        var validated = this.validation();
        if (!validated) {
            console.log("validation successfull")

            if(this.state.password === this.state.confirm_password){
               // console.log(this.state.password)
                let data ={
                    "newPassword":this.state.password,
                };
                console.log(data)

                service.reset(data)
                    console.log(data)
                    .then(res=>{
                      //  console.log(res.data)
                        console.log(res)           
                   
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }

        }else console.log("something missing");
        }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        console.log(this.state)
        return (
            <div className="main-page">
                <div className="container">
                    <div className="first-part">
                        <div className="google-title">
                            <p style={{ color: 'blue' }} >f</p>
                            <p style={{ color: 'red' }}>a</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                    </div>
                    <div>
                        < p className="find-email">Find your email</p>
                        <p className="password-para">Enter password</p>
                    </div>
                    <div className="password-text">
                        <TextField name="password" id="outlined-basic" label="Password" variant="outlined" fullWidth
                            error={this.state.passwordError}
                            helperText={this.state.passwordError ? "email or password required" : " "}
                            onChange={(e) => this.changeHandle(e)} />
                    </div>
                    <div className="confirm-password">
                        <TextField name="confirm_password" type="password" id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth
                            error={this.state.confirm_passError}
                            helperText={this.state.confirm_passError ? "password required" : " "}
                            onChange={(e) => this.changeHandle(e)} />
                    </div>
                    <Link to="/login">
                    <button className="next-button" onClick={this.next}>Next</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ResetPass
