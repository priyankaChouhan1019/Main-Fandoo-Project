
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
                           <div>  <TextField id="outlined-basic" label="First Name" variant="outlined" /></div>
                           <div> <TextField id="outlined-basic" label="Last Name" variant="outlined" /></div>
                       </div>
                   </div>
                   <div class="right-part"></div>
               </div>
           </div>
        )
    }
}

export default Signup
