import React from "react"
import { Card, TextField } from "material-ui"

export default class NewCustomerForm extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            businessName: "",
            telephoneNumber: ""
        }
    }

    render() {
        const { businessName, telephoneNumber } = this.state

        return (
            <Card>
                <TextField
                    floatingLabelText="Business Name"
                    floatingLabelFixed={true}
                    value={businessName}
                />
                <TextField
                    floatingLabelText="Telephone Number"
                    floatingLabelFixed={true}
                    value={telephoneNumber}
                />
            </Card>
        )
    }
}