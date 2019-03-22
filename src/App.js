import React, { Component } from 'react';
import MessageBoard from './Components/MessageBoard'
import SendmessageForm from './Components/SendmessageForm'
import RoomList from './Components/RoomList'
import NewRoomForm from './Components/NewRoomForm'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'




class App extends Component {
  constructor(){
    super()
    this.state = {
      messages: []
    }
  }

//Getting data from pusher chatkit API
  componentDidMount() {
    //All data is in documentation
     const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:a1e94c27-474d-4c9b-a4fb-55ae95479c5f',
      userId: 'chatkitUser',
      tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a1e94c27-474d-4c9b-a4fb-55ae95479c5f/token' })
    })

  chatManager.connect()
    .then(currentUser => {
        this.currentUser = currentUser
        this.currentUser.subscribeToRoom({
            roomId: '30845979',
            hooks: {
              onMessage: message => {
                //1.store data in component
                  //Add state to componenet to pass data
                  //set new state
                   this.setState({
                      messages: [...this.state.messages,message]
                   })
                //2.pass the new data into messageBoard
              }
            }
        })
    }) 
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: '30845979'
    }) 
  }
 

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageBoard messages={this.state.messages}/>
        <SendmessageForm sendMessage={this.sendMessage}/>
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
