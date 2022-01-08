import React, { Component } from 'react'
import '../login/Login.css'
import { TextField } from "@material-ui/core";

export class Login extends Component {
  render() {
    return (
        <div className="main-page">
        <div className="page-container">
            <div className="first-content">
                <div className="google-title">
                    <p style={{ color: 'blue' }} >G</p>
                    <p style={{ color: 'red' }}>o</p>
                    <p style={{ color: 'yellow' }}>o</p>
                    <p style={{ color: 'blue' }}>g</p>
                    <p style={{ color: 'green' }}>l</p>
                    <p style={{ color: 'red' }}>e</p>
                </div>
                <p className="sign-in">Sign in</p>
                < p className="account">Use your Fundoo Account</p>
            </div>
            <div className="email-row">
                <TextField id="outlined-basic" label="Email or phone" variant="outlined" helperText="Forgot Email?" fullWidth />
            </div>
            <br></br>
            <div className="password-row">
                <TextField id="outlined-basic" label="Password" variant="outlined" helperText="Forgot Password" fullWidth />

            </div>
            <div className="else-computer">
                <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                <p className="learnmore">Learn more</p>
            </div>
            <div className="create">
                <p className="c-text" >Create account ?</p>
                <div className="last-section">
                    <button className="c-next">Next</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Login
