import React from 'react'

import { useState , useEffect} from 'react'
import { useParams ,useNavigate} from 'react-router'

import axios from 'axios'

function SkillDetails() {
    const { id } = useParams()
    const [skill, setSkill] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()
    async function getSingleData() {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/skills/${id}`)
            setSkill(response.data)
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
    if (!skill) return <h4>Loading your Skill details...</h4>

    return (
        <div>
            <h4>{skill.name_of_skill}</h4>
        </div>
    )
}
export default SkillDetails

