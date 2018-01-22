import React from "react"
import { AutoComplete } from "material-ui"
import { getPredictions } from "services/googleMaps"

export default class AddressAutoComplete extends React.Component
{
    constructor(props) {
        super(props)

        this.state = {
            predictions: [],
        }
    }

    handleInputChanged = value =>
        getPredictions(value)
            .then(predictions => {
                this.setState({ predictions })
            })

    transformPredictions =
            predictions => predictions.map(({ description }) => description)

    render() {

        const { predictions } = this.state
        const { onSelect } = this.props

        return (
            <AutoComplete
                dataSource={this.transformPredictions(predictions)}
                floatingLabelText="Address"
                onUpdateInput={this.handleInputChanged}
                onNewRequest={onSelect}
            />
        )
    }
}