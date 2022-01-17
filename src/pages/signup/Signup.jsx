
import React, { Component } from 'react'
// import '../pages/signup/Signup.scss'
import '../signup/Signup.scss'
import logo from '../signup/assets/googleLogo.png';
//import '../signup/Signup.jsx'
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserService from '../../service/userservice';

const service = new UserService();

export class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirm_password: "",
            firstNameError: false,
            lastNameError: false,
            emailError: false,
            passwordError: false,
            confirm_passwordError: false
        };
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.firstNameError = this.state.firstName === '' ? true : false;
        error.lastNameError = this.state.lastName === '' ? true : false;
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirm_passwordError = this.state.confirm_password === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.confirm_passwordError;

    }

    next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("validation done successfullyyyy")


            let data = {
                "firstName": " shan",
                "lastName": "rathore",
                "email": "rathor@gmail.com",
                "password": "125",
                "service": "advance"
            };

            service.registration(data)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };



    render() {

        return (

            <div className="main-page">

                <div className="main-container">
                    <div className="left-part">
                        <div className="fandoo">
                            <p style={{ color: 'blue' }} >F</p>
                            <p style={{ color: 'red' }}>a</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <div className="heading">
                            <p>Create your Google Account</p>
                        </div>
                        <div className="name-row">
                            <div className="first-names">
                                <TextField name="firstName" id="outlined-basic" label="First Name" variant="outlined"
                                    error={this.state.firstNameError}
                                    helperText={this.state.firstNameError ? "first name required" : " "}
                                    onChange={(e) => this.changeHandle(e)}
                                />
                            </div>
                            <div className="last-names">
                                <TextField name="lastName" id="outlined-basic" label="Last Name" variant="outlined"
                                    error={this.state.lastNameError}
                                    helperText={this.state.lastNameError ? "last name required" : " "}
                                    onChange={(e) => this.changeHandle(e)}
                                />
                            </div>
                        </div>
                        <div className="user-row">
                            <TextField name="email" id="outlined-basic" label="user name" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods"
                                error={this.state.emailError}
                                helperText={this.state.emailError ? "user name required" : " "}
                                onChange={(e) => this.changeHandle(e)}
                            />
                        </div>
                        <div className="use_current">
                            <p>use the current email address instead</p>
                        </div>
                        <div class="password-row">
                            <div className="password">
                                <TextField name="password" id="outlined-basic" label="Password" variant="outlined"
                                    error={this.state.passwordError}
                                    helperText={this.state.passwordError ? "password required" : " "}
                                    onChange={(e) => this.changeHandle(e)}
                                /></div>

                            <div className="c-password">
                                <TextField name="confirm_password" id="outlined-basic" label="Confirm Password" variant="outlined"
                                    error={this.state.confirm_passwordError}
                                    helperText={this.state.confirm_passwordError ? "confirm password" : " "}
                                    onChange={(e) => this.changeHandle(e)}
                                /></div>
                        </div>
                        <div className="password_discription">
                            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                        </div>
                        <div className="checkbox">
                            <input class="check1" type="checkbox"></input>
                            <p class="showbox">Show Password</p>
                        </div>
                        <div className="lastSection">
                            <div class="sign-instead">
                                <Link to="/login">
                                    <p>Sign in instead</p> </Link>
                            </div>
                            <div class="sign-button">
                                <button className="sign_button" onClick={this.next}  > Next </button>


                            </div>
                        </div>
                    </div>

                    <div class="right-part">
                        
                        <img className="logo1" src={logo} alt="this is logo" ></img>
                        < p className="logo-text">One account. All of Google working for you.</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default Signup
