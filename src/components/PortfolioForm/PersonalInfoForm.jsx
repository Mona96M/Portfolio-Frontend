import React from 'react'

function PersonalInfoForm(props) {
    return (
        <div>
            <form>
                <div>
                <label htmlFor='full_name'>Full name</label>
                <input
                    id='full_name'
                    name='full_name'
                    required
                    value={props.personalData.full_name}
                    onChange={(event) => props.setPersonalData(prev => ({
                        ...prev, 
                        full_name: event.target.value }))}
                />
                </div>
                <div>
                <label htmlFor='phone'>Phone Number</label>
                <input 
                    id='phone'
                    name='phone'
                    required
                    value={props.personalData.phone}
                    onChange={(event) => props.setPersonalData(prev => ({
                        ...prev, 
                        phone: event.target.value }))}
                />
                </div>
                <div>
                <label htmlFor='linkedin'>Linkedin</label>
                <input 
                    id='linkedin'
                    name='linkedin'
                    required
                    value={props.personalData.linkedin}
                    onChange={(event) => props.setPersonalData(prev => ({
                        ...prev, 
                        linkedin: event.target.value }))}
                />
                </div>
                <div>
                <label htmlFor='bio'>About me</label>
                <textarea 
                    id='bio'
                    name='bio'
                    required
                    value={props.personalData.bio}
                    onChange={(event) => props.setPersonalData(prev => ({
                        ...prev, 
                        bio: event.target.value }))}
                />
                </div>
            </form>
        </div>
    )
}
export default PersonalInfoForm