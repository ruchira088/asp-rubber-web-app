import React from "react"
import { Route } from "react-router-dom"
import Customer from "routes/Customer"
import Authenticated from "hoc/Authenticated"

const Home = ({ match }) => (
    <div>
        <Route path={`${match.url}/customer`} component={Customer}/>
    </div>
)

export default Authenticated(Home)