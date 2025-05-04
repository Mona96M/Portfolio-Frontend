import React from 'react'

import { useState } from 'react'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(){

    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div>
        <input
            type='text'
            placeholder='Username'
            name='username'
        />
        </div>
        <div>
        <input
            type='password'
            placeholder='password'
            name='password'
        />
        </div>
        <div>
        <input
            type='text'
            placeholder='email'
            name='email'
        />
        </div>
        <button type='submit'>sign up</button>
        </form>
    </div>
    )
}

export default SignUp
