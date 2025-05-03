import React from 'react'

function EducationForm(props) {
    return (
        <div>
            <form>
                <div>
                <label htmlFor='university'>University</label>
                <input
                    id='university'
                    name='university'
                    required
                    value={props.formData.university}
                    onChange={(event) => props.setFormData(prev => ({
                        ...prev, 
                        university: event.target.value 
                    }))}
                />
                </div>
                <div>
                <label htmlFor='major'>Major</label>
                <input 
                    id='major'
                    name='major'
                    required
                    value={props.formData.major}
                    onChange={(event) => props.setFormData(prev => ({
                        ...prev, 
                        major: event.target.value 
                    }))}
                />
                </div>
            </form>
        </div>
    )
}
export default EducationForm