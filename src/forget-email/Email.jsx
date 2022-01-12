import React, { Component } from 'react'
import '../forget-email/Email.css'
import { TextField ,Button} from "@material-ui/core";

export class Email extends Component {
    render() {
        return (
            <div className="main-page">
                <div className="container-main">
                    <div className="first-part">
                        <div className="google-title">
                            <p style={{ color: 'blue' }} >G</p>
                            <p style={{ color: 'red' }}>o</p>
                            <p style={{ color: 'yellow' }}>o</p>
                            <p style={{ color: 'blue' }}>g</p>
                            <p style={{ color: 'green' }}>l</p>
                            <p style={{ color: 'red' }}>e</p>
                        </div>
                    </div>
                    <div class="email-heading">
                        < p className="find-email">Find your email</p>
                    </div>
                    <div className="paragraph">
                        <p >Enter your phone number or recovery email</p>
                    </div>

                    <div className="email-text">
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </div>
                    <div class="email_button">
                    <Button variant="contained">Next</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Email
