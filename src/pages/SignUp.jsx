import React from 'react'

import { useState } from 'react'
import axios from 'axios'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/signup/',
                {username, email, password}
            )
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }}

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
        <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={event => setUsername(event.target.value)}
            value={username}
        />
        </div>
        <div>
        <input
            type='password'
            placeholder='password'
            name='password'
            onChange={event => setPassword(event.target.value)}
            value={password}
        />
        </div>
        <div>
        <input
            type='text'
            placeholder='email'
            name='email'
            onChange={event => setEmail(event.target.value)}
            value={email}
        />
        </div>
        <button type='submit'>sign up</button>
        </form>
    </div>
    )
}

export default SignUp
