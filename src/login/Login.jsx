import React, { Component } from 'react'
import '../login/Login.css'
import { TextField } from "@material-ui/core";

export class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         login_email : "",
         login_password : "",
         login_emailError: false,
         login_passwordError: false
        };
      }
    
      validation =()=>{
          let isError= false;
          const error = this.state;
          error.login_emailError = this.state.login_email === ''? true : false;
          error.login_passwordError = this.state.login_password === '' ? true : false;
    
          this.setState({
              ...error
          })
          
          return isError = error.login_emailError || error.login_passwordError ;
    
      }
    
      next=()=>{
          var validated  = this.validation();
          if(validated){
              console.log("validation done successfullyyyy")
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
                <TextField name ="login_email" id="outlined-basic" label="Email or phone" variant="outlined" fullWidth
                error={this.state.login_emailError}
                helperText={this.state.login_emailError ? "email or phone required" : " "}
                onChange={(e) => this.changeHandle(e)}/>
            </div>
            <p id="forgotEmail"> Forgot email ?</p>
            <div className="password-row">
                <TextField name="login_password" id="outlined-basic" label="Password" variant="outlined" fullWidth
                error={this.state.login_passwordError}
                helperText={this.state.login_passwordError ? "password required" : " "}
                onChange={(e) => this.changeHandle(e)} />
            </div>
            <p id="forgotPassword"> Forgot password ?</p>
            
            <div className="else-computer">
                <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                <p className="learnmore">Learn more</p>
            </div>
            <div className="create">
                <div className="l-text">
                <p  >Create account ?</p>
                </div>
                
                <div className="last-section">
                    <button className="l-next" onClick={this.next}>Next</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Login
