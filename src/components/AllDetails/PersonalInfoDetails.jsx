import React from 'react'

import { useState , useEffect} from 'react'
import { useParams } from 'react-router'

import axios from 'axios'

function PersonalInfoDetails() {
    const { id } = useParams()
    const [personal, setPersonal] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    async function getSingleData() {
        
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/personalinfo/${id}`)
            setPersonal(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                setErrorMsg('Personal Info Not Found')
            } else {
                setErrorMsg('Somethig went Wrong!')
            }
        }
    }

    useEffect(() => {
        getSingleData()
        console.log(id)
    }, [])


    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!personal) return <h4>Loading your Personalinfo...</h4>

    return (
        <div>
            <h2>{personal.full_name}</h2>
            <h4>{personal.phone}</h4>
            <h4>{personal.linkedin}</h4>
            <h4>{personal.bio}</h4>
        </div>
    )
}

export default PersonalInfoDetails
