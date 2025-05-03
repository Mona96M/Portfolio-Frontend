import React from 'react'

function SkillForm(props) {
    return (
        <div>
            <form>
                <div>
                <label htmlFor='name_of_skill'>Name of Skill</label>
                <input
                    id='name_of_skill'
                    name='name_of_skill'
                    required
                    value={props.skillData.name_of_skill}
                    onChange={(event) => props.setSkillData(prev => ({
                        ...prev, 
                        name_of_skill: event.target.value 
                    }))}
                />
                </div>
            </form>
        </div>
    )
}
export default SkillForm