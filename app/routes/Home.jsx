import React from "react"
import { Route } from "react-router-dom"
import Customer from "routes/Customer"
import AuthenticatedHOC from "hoc/AuthenticatedHOC"

const Home = ({ match }) => (
    <div>
        <Route path={`${match.url}/customer`} component={Customer}/>
    </div>
)

export default AuthenticatedHOC(Home)