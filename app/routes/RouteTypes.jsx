import React from "react"
import ChildrenWrapper from "components/ChildrenWrapper"
import { AuthenticatedPage, UnauthenticatedPage } from "components/PageTypes"

const RouteCreator = (Component, className) => ({ children }) => (
        <ChildrenWrapper className={className} Component={Component}>
            { children }
        </ChildrenWrapper>
    )

export const AuthenticatedRoutes = RouteCreator(AuthenticatedPage, "authenticated-routes")

export const UnauthenticatedRoutes = RouteCreator(UnauthenticatedPage, "unauthenticated-routes")