import React from "react"
import { Route } from "react-router-dom"
import Customer from "routes/Customer"

export default ({ match }) => (
    <div>
        <Route path={`${match.url}/customer`} component={Customer}/>
    </div>
)