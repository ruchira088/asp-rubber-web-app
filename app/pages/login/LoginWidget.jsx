import React from "react"
import { RaisedButton, TextField, Card } from "material-ui"
import { login } from "services/authentication"

import "styles/login-widget.scss"

export default class Login extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    updateField = fieldName => ({ target }) => this.setState({ [fieldName]: target.value })

    onLoginButtonClick = event => {
        const { username, password } = this.state

        event.preventDefault()

        login(username, password)
    }

    render() {
        const { username, password } = this.state

        return (
            <Card className="login-widget">
                <form>
                    <div className="username-field">
                        <TextField
                            onChange={this.updateField("username")}
                            value={username}
                            hintText="Username Field"
                            floatingLabelText="Username"
                        />
                    </div>
                    <div className="password-field">
                        <TextField
                            onChange={this.updateField("password")}
                            value={password}
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password"
                        />
                    </div>
                    <div className="login-button">
                        <RaisedButton label="Login" primary={true} onClick={this.onLoginButtonClick}/>
                    </div>
                </form>
            </Card>
        )
    }
}