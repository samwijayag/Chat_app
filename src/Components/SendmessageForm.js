import React from 'react'

class SendMessageForm extends React.Component {
	constructor(){
		super()
		this.state = {
			message: ''
		}
	}

	 handleChange = (event) => {
		this.setState({
			message: event.target.value
		})
	}

	 handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state.message)
		this.props.sendMessage(this.state.message)
		//send message and save it in state.message
		// this.props.sendMessage.append(this.state.message)
		//send the message
		this.setState({
			message:''
		})
	}

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="send-message-form">
                <input
                	onChange = {this.handleChange}
                	value={this.state.message}
                    placeholder="Start Chatting!"
                    type="text" 
                />
            </form>
        )
    }
}

export default SendMessageForm