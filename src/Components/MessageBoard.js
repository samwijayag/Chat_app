import React from 'react'
import Message from './Message'


class MessageBoard extends React.Component {

	render(){
		const messageData = this.props.newChatMessage.map((message,index) => {
			return (
				<div key={index} className="message">
	                <Message  username={message.userId} text={message.text} />
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