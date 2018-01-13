import React from "react"
import { withRouter } from "react-router-dom"
import { getAuthenticatedUser } from "services/authentication"

class Authenticated extends React.Component
{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { history } = this.props

        getAuthenticatedUser()
            .catch(() => {
                console.log("Unauthenticated user")
                history.push("/login")
            })
    }

    render() {
        const { Component, ...props } = this.props

        return <Component {...props}/>
    }
}

export default component =>
    withRouter(props => <Authenticated Component={component} {...props}/>)