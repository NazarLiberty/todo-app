import React from 'react'
import './add-button.css'

export default class AddButton extends React.Component {
    constructor() {
        super()
        this.state = {
            text: "",
        }
        this.onLabelChange = (ev) => {
            this.setState({ text: ev.target.value })
        }
        this.onSubmit = (ev) => {
            this.props.onAdded(this.state.text)
            this.setState({ text: "" })
            ev.preventDefault()

        }
    }

    render() {
        return (
            <form className="add-form"
                onSubmit={this.onSubmit}>
                <input type="text"
                    value={this.state.text}
                    className="add-form__input"
                    onChange={this.onLabelChange}
                    placeholder="What needs to do..." />
                <button className="add-button">Add Task!</button>
            </form>
        )
    }
}

