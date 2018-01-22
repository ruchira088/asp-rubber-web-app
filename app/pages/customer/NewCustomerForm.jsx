import React from "react"
import { Card, TextField } from "material-ui"
import AddressAutoComplete from "components/AddressAutoComplete"

export default class NewCustomerForm extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            contactName: "",
            businessName: "",
            telephoneNumber: "",
            email: "",
            address: ""
        }
    }

    onTextChange = fieldName => ({ target }) => this.setState({ [fieldName]: target.value })

    setAddress = address => this.setState({ address })


    textField = (label, fieldName, {...props} = {}) =>
        <div className="input-text-field">
            <TextField
                floatingLabelText={label}
                value={this.state[fieldName]}
                onChange={this.onTextChange(fieldName)}
                {...props}
            />
        </div>

    render() {
        return (
            <Card className="new-customer-form">
                { this.textField("Contact Name", "contactName") }
                { this.textField("Business Name", "businessName") }
                { this.textField("Telephone Number", "telephoneNumber") }
                { this.textField("Email", "email") }
                <AddressAutoComplete onSelect={this.setAddress}/>
            </Card>
        )
    }
}