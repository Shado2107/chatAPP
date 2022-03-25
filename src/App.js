import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'

import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height= "100vh"
            projectID="c9ee8c4e-3e9d-428a-aa12-ef1effce49ea"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }

        />
    )
}

export default App;