import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import { MuiThemeProvider as ThemeProvider } from "material-ui"
import PageContainer from "components/PageContainer"
import Home from "routes/Home"
import LoginPage from "pages/login/LoginForm"

export default () => (
    <BrowserRouter>
        <ThemeProvider>
            <PageContainer>
                <Route path="/login" component={LoginPage}/>
                <Route path="/home" component={Home}/>
            </PageContainer>
        </ThemeProvider>
    </BrowserRouter>
)