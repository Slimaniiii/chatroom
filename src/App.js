import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {

     if (!localStorage.getItem('username')) return <LoginForm />
    return (

        <ChatEngine
        height="100vh"
        projectID="0b65c2db-bac9-4073-93d3-1133d8fdc119"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    )
}

export default App;