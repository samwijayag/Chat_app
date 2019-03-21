import React from 'react'


class MessageBoard extends React.Component {

	render(){
		const messageData = this.props.newChatMessage.map((message,Index) => {
			return (
				<div key={Index} className="message">
	                <div className="message-username">{message.userId}</div>
	                <div className="message-text">{message.text}</div>
	            </div>
			)
		})
		
		return(
			<div className="message-list">
				{messageData}
			</div>
		)
	}
	
}

export default MessageBoard