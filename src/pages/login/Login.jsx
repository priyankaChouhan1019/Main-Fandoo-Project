import React, { Component } from 'react'
import '../login/Login.scss'
import { TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import UserService from '../../service/userservice';
import axios from 'axios';
const service = new UserService();

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            emailError: false,
            passwordError: false
        };
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailError || error.passwordError;

    }

    next = () => {
        var validated = this.validation();
        if (!validated) {
            console.log("validation done successfullyyyy")
            let data = {

            //    id: priyaaa1019chouhan@gmail.com
            //    pass: priya1019
                "email" : this.state.email,
                "password" : this.state.password,
          };

          service.signin(data)
          .then(res =>{
              console.log(res)
              localStorage.setItem('token',res.data.id)
              console.log( localStorage.setItem('token',res.data.id))
          })
          .catch(err =>{
              console.log(err)
          })
        }
            else console.log("missed somthing")
        }
        
    

    changeHandle = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div className="main-page">
                <div className="page-container">
                    <div className="first-content">
                        <div className="login-title">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>a</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <p className="sign-in">Sign in</p>
                        < p className="account">Use your Fundoo Account</p>
                    </div>
                    <div className="email-row">
                        <TextField name="email" id="outlined-basic" label="Email or phone" variant="outlined" fullWidth
                            error={this.state.emailError}
                            helperText={this.state.emailError ? "email or phone required" : " "}
                            onChange={(e) => this.changeHandle(e)} />
                    </div>
                    <p id="forgotEmail"> Forgot email ?</p>
                    <div className="password-row">
                        <TextField name="password" id="outlined-basic" label="Password" variant="outlined" fullWidth
                            error={this.state.passwordError}
                            helperText={this.state.passwordError ? " password required" : " "}
                            onChange={(e) => this.changeHandle(e)} />
                    </div>
                    <p id="forgotPassword"> Forgot password ?</p>

                    <div className="else-computer">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <div className="l-text">
                        <Link to="/"> <p  >Create account ?</p></Link>
                        </div>

                        <div className="last-section">
                        <Link to="/dashboard">
                            <button className="l-next" onClick={this.next}>Next</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
