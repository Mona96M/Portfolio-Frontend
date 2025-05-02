import React from 'react'

function PersonalInfoForm() {
    return (
        <div>
            <form>
                <div>
                <label htmlFor='full_name'>Full name</label>
                <input
                    id='full_name'
                    name='full_name'
                    required
                />
                </div>
                <div>
                <label htmlFor='phone'>Phone Number</label>
                <input 
                    id='phone'
                    name='phone'
                    required
                />
                </div>
                <div>
                <label htmlFor='linkedin'>Linkedin</label>
                <input 
                    id='linkedin'
                    name='linkedin'
                    required
                />
                </div>
                <div>
                <label htmlFor='bio'>About me</label>
                <textarea 
                    id='bio'
                    name='bio'
                    required
                />
                </div>
            </form>
        </div>
    )
}
export default PersonalInfoForm