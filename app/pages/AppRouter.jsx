import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import PageContainer from "components/PageContainer"
import LoginPage from "pages/login/LoginWidget"

export default () => (
    <BrowserRouter>
        <PageContainer>
            <Route path="/login" component={LoginPage}/>
        </PageContainer>
    </BrowserRouter>
)