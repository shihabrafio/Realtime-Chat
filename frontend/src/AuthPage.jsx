import axios from 'axios'
import React, { useState } from 'react';

export const AuthPage = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =(e)=>{
        e.preventDefault()
        console.log(e)
        const {value} = e.target[0]
        axios.post('https://realtime-chat-hrxj.onrender.com/authenticate',{username,password})
        .then(r=>props.onAuth({...r.data, secret: value}))
        .catch(e=>console.log(e))
    }
  return (
        <div className='background'>
            <form onSubmit={onSubmit} className='form-card'>
                <div className='form-title'> Welcome </div>
                <div className='form-subtitle'> Set a username and password to get started </div>

                <div className='auth'>
                    <div className='auth-label'>Username</div>
                    <input
                        className='auth-input'
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className='auth'>
                    <div className='auth-label'>Password</div>
                    <input
                        className='auth-input'
                        name='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className='auth-button' type='submit'>Enter</button>
            </form>
        </div>
  )
}
