import React from "react"
import Page from "components/Page"

const pageCreator = ({...other}) => ({ children, ...props }) => (
    <Page {...other} {...props}>
        { children }
    </Page>
)

export const AuthenticatedPage =
    pageCreator({ onUnauthUser: history => history.push("/login") })

export const UnauthenticatedPage =
    pageCreator({ onAuthUser: history => history.push("/home") })
