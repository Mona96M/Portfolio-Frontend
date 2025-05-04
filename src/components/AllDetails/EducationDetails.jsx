import React from 'react'

import { useState , useEffect} from 'react'
import { useParams,useNavigate,Link } from 'react-router'

import axios from 'axios'

function EducationDetails() {
    const { id } = useParams()
    const [education, setEducation] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    async function getSingleData() {
        
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/educations/${id}`)
            setEducation(response.data)
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
    if (!education) return <h4>Loading your Education details...</h4>

    return (
        <div>
            <h2>Education</h2>
            <Link to={`/education/${education.id}/edit`}>
            <h4>{education.university}</h4></Link>
            <h4>{education.major}</h4>
        </div>
    )
}

export default EducationDetails

