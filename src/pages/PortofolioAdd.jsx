import React from 'react'
import PersonalInfoForm from '../components/PortfolioForm/PersonalInfoForm'
import { useState } from 'react'

function PortofolioAdd() {
    const [full_name, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [bio, setBio] = useState('')
    return (
    <div>
        <h1>Fill out the form</h1>
        <PersonalInfoForm
            full_name={full_name}
            setFullName={setFullName}
            phone={phone}
            setPhone={setPhone}
            linkedin={linkedin}
            setLinkedin={setLinkedin}
            bio={bio}
            setBio={setBio}
        />
    </div>
    )
}

export default PortofolioAdd
