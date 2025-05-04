import React from 'react'

import { useState } from 'react'
// import axios from 'axios'
import { authorizedRequest } from '../lib/api'
import { setTokens } from '../lib/api'
function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const response = await authorizedRequest('post', 'signup/',
                {username, email, password}
            )
            console.log(response.data)
            setTokens(response.data)
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
