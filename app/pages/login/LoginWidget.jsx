import React from "react"
import InputSection from "components/InputSection"
import { login } from "services/authentication"

const LoginButton = ({ onClick }) => (
    <div className="login-button">
        <button onClick={onClick}>Login</button>
    </div>
)

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
        const { username, password } = this.state

        event.preventDefault()

        login(username, password)
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