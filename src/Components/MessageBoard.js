import React from 'react'
import Message from './Message'


class MessageBoard extends React.Component {

	render(){
		const messageData = this.props.messages.map((message,index) => {
			return (
				<div key={index} className="message">
	                <Message  username={message.senderId} text={message.text} />
	                
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