import React from 'react';


export default class MantraForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        };
    }



    render() {
        return (


            <div>
                <form onSubmit={this._handleSubmit}>
                    <input
                        value={this.state.text}
                        onChange={this._handleChange}
                    />
                    <input type="submit" value="Go!" />
                </form>
            </div>
        )
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.text)
        this.setState({
            text: ''
        })
    }

    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
}