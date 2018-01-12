import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import { MuiThemeProvider as ThemeProvider } from "material-ui"
import PageContainer from "components/PageContainer"
import LoginPage from "pages/login/LoginWidget"

export default () => (
    <BrowserRouter>
        <ThemeProvider>
            <PageContainer>
                <Route path="/login" component={LoginPage}/>
            </PageContainer>
        </ThemeProvider>
    </BrowserRouter>
)