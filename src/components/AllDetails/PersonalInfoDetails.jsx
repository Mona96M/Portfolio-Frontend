import React from 'react'

import { useState , useEffect} from 'react'
import { Link } from 'react-router'

// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'

function PersonalInfoDetails() {

    const [personal, setPersonal] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    
    async function getUserData() {
        
        try {
            const response = await authorizedRequest('get', '/personalinfo/')
            setPersonal(response.data)

        } catch (err) {
            console.log(err)
            setErrorMsg('Access denied: this skill entry does not belong to you.')
        }
    }

    useEffect(() => {
        getUserData()
        console.log()
    }, [])


    if (errorMsg) return <h1>{errorMsg}</h1>
    if (!personal) return <h4>Loading your Personalinfo...</h4>

    return (
        <div>
            <ul>
            

                {personal.map(personalInf => {
                    return (
                        <li key={personalInf.id}>
                            <Link to={`/personalinfo/${personalInf.id}/edit`}>
                            <h2 className="title is-3 has-text-left">{personalInf.full_name}</h2>
                            <p className="has-text-left">{personalInf.phone}</p>
                            <p className="has-text-left">{personalInf.linkedin}</p><br/>
                            <p className="has-text-left">{personalInf.bio}</p></Link><br/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PersonalInfoDetails
