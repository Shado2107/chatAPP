import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID':'c9ee8c4e-3e9d-428a-aa12-ef1effce49ea', 'User-Name': username, 'User-Secret': password }

        try {
          await axios.get('https://api.chatengine.io/chats',{ headers: authObject });

          localStorage.setItem('username', username);
          localStorage.setItem('password', password);

          window.location.reload();


        } catch(error) {
            setError('Oops, incorrect credentials')
        }

    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className="title">Chat APPLICATION</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="input" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input" required/>
                    <div align='center'>
                        <button type="submit" className='button'>
                            <span>Start chatting</span>
                        </button>
                    </div>
                    <h2 className='error'> {error} </h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;