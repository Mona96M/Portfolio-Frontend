import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

function PersonalInfoList() {
    const [personalInfo, setPersonalInfo] = useState([])

    async function getAllInfo(){
        const response = await axios.get('http://127.0.0.1:8000/api/personalinfo/')
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
                        <li>
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