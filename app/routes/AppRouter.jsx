import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { MuiThemeProvider as ThemeProvider } from "material-ui"
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "routes/RouteTypes"
import LoginForm from "pages/login/LoginForm"
import Customer from "routes/Customer"

export default () => (
    <BrowserRouter>
        <ThemeProvider>
            <div>
                <UnauthenticatedRoutes>
                    <Route path="/login" component={LoginForm}/>
                </UnauthenticatedRoutes>
                <AuthenticatedRoutes>
                    <Route path="/customer" component={Customer}/>
                </AuthenticatedRoutes>
            </div>
        </ThemeProvider>
    </BrowserRouter>
)