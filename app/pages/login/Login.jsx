import React from "react"
import InputSection from "components/InputSection"
import * as storage from "storage/localStorage"
import { login } from "services/authentication"

const LoginButton = ({ onClick }) => (
    <div className="login-button">
        <button onClick={onClick}>Login</button>
    </div>
)

export const STORAGE_KEY = "session"

export default class Login extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    updateField = fieldName => value => this.setState({ [fieldName]: value })

    onLoginButtonClick = event => {
        event.preventDefault()
        const { username, password } = this.state

        login(username, password)
            .then(session => storage.set(STORAGE_KEY, session))
    }

    render() {
        const { username, password } = this.state

        return (
            <div className="login">
                <form>
                    <InputSection
                        label="Username"
                        autoComplete="username"
                        value={username}
                        onTextChange={this.updateField("username")}/>
                    <InputSection
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onTextChange={this.updateField("password")}/>
                    <LoginButton onClick={this.onLoginButtonClick}/>
                </form>
            </div>
        )
    }
}