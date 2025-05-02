import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/login')
    }
    return (
        //used W3Schools as a reference for styling the content
    <div className='content'>
        <h1>Easily create a professional CV</h1>
        <p>Finish your resume in minutes...</p>
        <button type='submit' onClick={handleClick}>Get Start</button>
    </div>
    )
}

export default Home
