import React, { Component } from 'react'
import '../reset_pass/ResetPass.scss'
import { TextField } from "@material-ui/core";
export class ResetPass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirm_password: "",
            passwordError: false,
            confirm_passError: false
        };
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirm_passError = this.state.confirm_password === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.passwordError || error.confirm_passError;

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
                <div className="container">
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
                    <div>
                        < p className="find-email">Find your email</p>
                        <p className="password-para">Enter password</p>
                    </div>
                    <div className="password-text">
                        <TextField name="password" id="outlined-basic" label="Password" variant="outlined" fullWidth
                            error={this.state.passwordError}
                            helperText={this.state.passwordError ? "email or password required" : " "}
                            onChange={(e) => this.changeHandle(e)} />
                    </div>
                    <div className="confirm-password">
                        <TextField name="confirm_password" type="password" id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth
                            error={this.state.confirm_passError}
                            helperText={this.state.confirm_passError ? "password required" : " "}
                            onChange={(e) => this.changeHandle(e)} />
                    </div>
                    <button className="next-button" onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default ResetPass
