import React from 'react'

function SkillForm(props) {
    return (
            <div>
                <div>
                <label htmlFor='name_of_skill'  className="label">Name of Skill<span style={{color:'red'}}>*</span></label>
                <div className="control">
                <input className="input"
                    id='name_of_skill'
                    name='name_of_skill'
                    required
                    value={props.skillData.name_of_skill}
                    onChange={(event) => props.setSkillData(prev => ({
                        ...prev, 
                        name_of_skill: event.target.value 
                    }))}
                />
                </div></div>
            </div>
    )
}
export default SkillForm