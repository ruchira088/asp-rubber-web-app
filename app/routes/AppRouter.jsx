import React from "react"
import { BrowserRouter } from "react-router-dom"
import { MuiThemeProvider as ThemeProvider } from "material-ui"
import Route, { AuthenticatedRoutes, UnauthenticatedRoutes } from "routes/RouteTypes"
import LoginForm from "pages/login/LoginForm"
import Customer from "routes/Customer"
import Home from "routes/Home"

export default () => (
    <BrowserRouter>
        <ThemeProvider>
            <div>
                <UnauthenticatedRoutes>
                    <Route path="/login" component={LoginForm}/>
                </UnauthenticatedRoutes>
                <AuthenticatedRoutes>
                    <Route path="/home" component={Home}/>
                    <Route path="/customer" component={Customer}/>
                </AuthenticatedRoutes>
            </div>
        </ThemeProvider>
    </BrowserRouter>
)