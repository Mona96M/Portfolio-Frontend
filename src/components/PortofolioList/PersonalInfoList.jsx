import React from 'react'
// import axios from 'axios'
import { authorizedRequest } from '../../lib/api'

import { useState, useEffect } from 'react'

function PersonalInfoList() {
    const [personalInfo, setPersonalInfo] = useState([])

    async function getAllInfo(){
        const response = await authorizedRequest('get', 'personalinfo/')
        console.log(response)
        setPersonalInfo(response.data)
    }
    useEffect(() => {
        getAllInfo()
    }, [])

    return (
        <div>
            <h2>All Personal info</h2>
            <ul>
                {personalInfo.map(personalInf => {
                    return (
                        <li key={personalInf.id}>
                            <p>{personalInf.full_name}</p>
                            <p>{personalInf.phone}</p>
                            <p>{personalInf.linkedin}</p>
                            <p>{personalInf.bio}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PersonalInfoList