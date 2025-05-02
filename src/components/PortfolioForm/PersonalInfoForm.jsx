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
                    value={props.fullName}
                    onChange={(event) => props.setFullName(event.target.value)}
                />
                </div>
                <div>
                <label htmlFor='phone'>Phone Number</label>
                <input 
                    id='phone'
                    name='phone'
                    required
                    value={props.phone}
                    onChange={(event) => props.setPhone(event.target.value)}
                />
                </div>
                <div>
                <label htmlFor='linkedin'>Linkedin</label>
                <input 
                    id='linkedin'
                    name='linkedin'
                    required
                    value={props.linkedin}
                    onChange={(event) => props.setLinkedin(event.target.value)}
                />
                </div>
                <div>
                <label htmlFor='bio'>About me</label>
                <textarea 
                    id='bio'
                    name='bio'
                    required
                    value={props.bio}
                    onChange={(event) => props.setBio(event.target.value)}
                />
                </div>
            </form>
        </div>
    )
}
export default PersonalInfoForm