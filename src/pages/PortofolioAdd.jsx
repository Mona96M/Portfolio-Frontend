import React from 'react'
import PersonalInfoForm from '../components/PortfolioForm/PersonalInfoForm'
import { useState } from 'react'

function PortofolioAdd() {
    //used a single object for form state 
    //i used this reference https://react.dev/learn/updating-objects-in-state
    const [personalData, setPersonalData] = useState({
        full_name: '',
        phone: '',
        linkedin: '',
        bio: ''
    })
    
    return (
    <div>
        <h1>Fill out the form</h1>
        <PersonalInfoForm
            personalData={personalData}
            setPersonalData={setPersonalData}
        />
    </div>
    )
}

export default PortofolioAdd
