import React from 'react'

function EducationForm(props) {
    return (
            <div>
                <div>
                <label htmlFor='university' className="label">University<span style={{color:'red'}}>*</span></label>
                <div className="control">
                <input className="input"
                    id='university'
                    name='university'
                    required
                    value={props.educationData.university}
                    onChange={(event) => props.setEducationData(prev => ({
                        ...prev, 
                        university: event.target.value 
                    }))}
                />
                </div></div>
                <div>
                <label htmlFor='major' className="label">Major<span style={{color:'red'}}>*</span></label>
                <div className="control">
                <input className="input"
                    id='major'
                    name='major'
                    required
                    value={props.educationData.major}
                    onChange={(event) => props.setEducationData(prev => ({
                        ...prev, 
                        major: event.target.value 
                    }))}
                />
                </div></div>
            </div>
    )
}
export default EducationForm