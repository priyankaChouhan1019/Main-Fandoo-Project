import React, { Component } from 'react'
import '../forget-email/Forgot.scss'
import { Link } from 'react-router-dom';
import { TextField ,Button} from "@material-ui/core";

import UserService from '../../service/userservice';

const service = new UserService();

export class Forgot extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailError :false
        };
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.emailError = this.state.email === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailError;

    }

    next = () => {
        var validated = this.validation();
        if (!validated) {
            console.log("validation done successfullyyyy")

            let data = {
               "email": this.state.email
              
          };
         
          service.forgot(data)
          .then(res =>{
              console.log(res)
              localStorage.setItem('token',res.data.id)
          })
          .catch(err =>{
              console.log(err)
          })
        } else console.log("somthing missing")
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render() {
        return (
            <div className="main-page">
                <div className="container-main">
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
                    <div class="email-heading">
                        < p className="find-email">Find your email</p>
                    </div>
                    <div className="paragraph">
                        <p >Enter your phone number or recovery email</p>
                    </div>

                    <div className="email-text">
                        <TextField name ="email" id="outlined-basic" label="Phone number or email" variant="outlined" 
                         error={this.state.emailError}
                         helperText={this.state.emailError ? "email or password required" : " "}
                         onChange={(e) => this.changeHandle(e)}/>
                    </div>
                    <div class="email_button">
                  
                      <Button variant="contained" onClick={this.next}>Next</Button>  
                     {/* <button className="email-button" onClick={this.next}>Next</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Forgot
