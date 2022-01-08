
import React, { Component } from 'react'
import '../signup/Signup.css'
import { TextField } from "@material-ui/core";


export class Signup extends Component {
    render() {
        return (
           <div class="main-page">
               <div class="main-container">
                   <div class="left-part">
                       <div class="google-title">
                           <p>Google</p>
                       </div>
                       <div class ="heading">
                           <p>Create your Google Account</p>
                       </div>
                       <div class="name-row">
                           <div class="first-name">  <TextField id="outlined-basic" label="First Name" variant="outlined" /></div>
                           <div class="last-name"> <TextField id="outlined-basic" label="Last Name" variant="outlined" /></div>
                       </div>
                       <div class="user-row">
                       <TextField id="outlined-basic" label="Your email address" variant="outlined" fullWidth helperText="You can use letters,numbers  & periods" />
                       </div>
                       <div class="use_current">
                           <p>use the current email address instead</p>
                        </div>
                        <div class="password-row">
                           <div class="password">  <TextField id="outlined-basic" label="Password" variant="outlined" /></div>
                           <div class="c-password"> <TextField id="outlined-basic" label="Confirm Password" variant="outlined" /></div>
                           </div>
                           <div class="checkbox">
                            <input class="check1" type="checkbox"></input>
                            <p class="showbox">Show Password</p>
                        </div>
                        <div className="sign-instead">

                            
                                {/* <button className="button1">Next</button> */}

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
