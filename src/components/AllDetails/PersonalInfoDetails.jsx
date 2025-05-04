import React from 'react'

import { useState , useEffect} from 'react'
import { useParams,useNavigate, Link } from 'react-router'

// import axios from 'axios'
import { authorizedRequest } from '../lib/api'
function PersonalInfoDetails() {
    const { id } = useParams()
    const [personal, setPersonal] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    async function getSingleData() {
        
        try {
            const response = await authorizedRequest('get', `/personalinfo/${id}`)
            setPersonal(response.data)
        } catch (err) {
            console.log(err)
            if (err.status === 404) {
                navigate('/not-found')
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
            <Link to={`/personalinfo/${personal.id}/edit`}>
            <h2>Personal information</h2>
            </Link>
            <h2>{personal.full_name}</h2>
            <h4>{personal.phone}</h4>
            <h4>{personal.linkedin}</h4>
            <h4>{personal.bio}</h4>
        </div>
    )
}

export default PersonalInfoDetails
