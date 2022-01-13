import React, { Component } from 'react'
import '../forget-email/Email.css'
import { TextField ,Button} from "@material-ui/core";

export class Email extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email_text: "",
            email_textError :false
        };
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.email_textError = this.state.email_text === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.email_textError;

    }

    next = () => {
        var validated = this.validation();
        if (validated) {
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
                        <TextField name ="email_text" id="outlined-basic" label="Phone number or email" variant="outlined" 
                         error={this.state.email_textError}
                         helperText={this.state.email_textError ? "email or password required" : " "}
                         onChange={(e) => this.changeHandle(e)}/>
                    </div>
                    <div class="email_button">
                      <Button variant="contained" onClick={this.next}>Next</Button>  
                     {/* <button className="Emailnext-button" onClick={this.next}>Next</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Email
