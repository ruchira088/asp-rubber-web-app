import React from "react"
import { Route } from "react-router-dom"
import NewCustomerForm from "pages/customer/NewCustomerForm"

export default ({ match }) => (
    <div>
        <Route path={`${match.url}/new`} component={NewCustomerForm}/>
    </div>
)