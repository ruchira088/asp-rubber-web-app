import React from "react"
import { withRouter } from "react-router-dom"
import { getAuthenticatedUser } from "services/authentication"
import { stubFunction } from "utils/generalUtils"

class Page extends React.Component
{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { onAuthUser = stubFunction, onUnauthUser = stubFunction, history, location } = this.props

        getAuthenticatedUser()
            .then(authUser => onAuthUser(history, authUser))
            .catch(() => onUnauthUser(history))

    }

    render() {
        const { children, ...props } = this.props

        return React.cloneElement(React.Children.only(children), props)
    }
}

export default withRouter(Page)