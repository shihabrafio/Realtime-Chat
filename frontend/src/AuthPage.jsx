import React from 'react'

export const AuthPage = (props) => {
    const onSubmit =(e)=>{
        e.preventDefault()
        console.log(e)
        const {data} = e.target[0]
        console.log('Form submitted with data:', data);
        props.onAuth({username: data, secret: data})
    }
  return (
    <div className='background'>
        <form onSubmit={onSubmit} className='form-card'>
            <div className='form-title'> Welcome </div>
            <div className='form-subtitle'> Set a username to get started </div>

            <div className='auth'>
                <div className='auth-label'>Username</div>
                <input className='auth-input' name='username'/>
                <button className='auth-button' type='submit'>Enter</button>
            </div>
        </form>

    </div>
  )
}
