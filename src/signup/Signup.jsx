
import React, { Component } from 'react'
import '../signup/Signup.css'
import { TextField } from "@material-ui/core";


export class Signup extends Component {
    render() {
        return (
            <div class="main">
                <div class="container">
                    <div class="left-part"> 
                        <p class="title">Google</p>
                        <br></br>
                        <p class="account">Create your google account</p>
                        <br></br>
                        <div class="name-box">
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            <br></br><br></br>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        </div>
                        <br></br>
                        <TextField id="outlined-basic" label="Gmail" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods" />
                        
                        <br></br>
                        <br></br>
                        <p class="use_current">use the current email address instead</p>
                        <div class="password-box">
                            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" helperText="Use 8 or more characters with a mix of letters, numbers & symbols" />
                            <TextField id="outlined-basic" label="Confirm" type="password" variant="outlined" />
                        </div>
                        <div class="checkbox">
                            <input class="check1" type="checkbox"></input>
                            <p class="showbox">Show Password</p>
                        </div>
                        <div class="last-part">
                            <p class="signin">Sign in Instead</p>
                            <p class="blue-box">
                                <button class="button1">Next</button>
                            </p>
                        </div>
                     </div> 
                      <div class="right-part">
                       
                    </div>  
                </div>
            </div>
        )
    }
}

export default Signup
