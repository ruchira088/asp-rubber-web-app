import React from "react"
import { Route } from "react-router-dom"
import { stubFunction } from "utils/generalUtils"
import { AuthenticatedPage, UnauthenticatedPage } from "components/PageTypes"

export default stubFunction

const RouteCreator = (WrapperComponent, className) => ({ children }) => (
        <div className={className}>
            {
                React.Children.map(
                    children,
                    ({ props }) =>
                        <Route
                            path={props.path}
                            component={
                                (...cmpntProps) => (
                                    <WrapperComponent {...cmpntProps}>
                                        { React.createElement(props.component) }
                                    </WrapperComponent>
                                )}
                        />
                )
            }
        </div>
    )

export const AuthenticatedRoutes = RouteCreator(AuthenticatedPage, "authenticated-routes")

export const UnauthenticatedRoutes = RouteCreator(UnauthenticatedPage, "unauthenticated-routes")