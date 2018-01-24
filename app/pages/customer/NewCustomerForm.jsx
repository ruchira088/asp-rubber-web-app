import React from "react"
import { Card, TextField, RaisedButton } from "material-ui"
import AddressAutoComplete from "components/AddressAutoComplete"
import { camelCase } from "utils/generalUtils"

import "styles/new-customer-form.scss"

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


    textField = (label, props = {}) =>
        <div className="input-text-field">
            <TextField
                floatingLabelText={label}
                value={this.state[camelCase(label)]}
                onChange={this.onTextChange(camelCase(label))}
                fullWidth={true}
                {...props}
            />
        </div>

    render() {
        const { onSave = console.log } = this.props

        return (
            <Card className="new-customer-form">
                { this.textField("Contact Name") }
                { this.textField("Business Name") }
                { this.textField("Telephone Number") }
                { this.textField("Email") }
                <AddressAutoComplete onSelect={this.setAddress}/>
                <RaisedButton label="Save" primary={true} onClick={() => onSave(this.state)}/>
            </Card>
        )
    }
}