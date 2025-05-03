import React from 'react'

function SkillForm() {
    return (
        <div>
            <form>
                <div>
                <label htmlFor='name_of_skill'>Name of Skill</label>
                <input
                    id='name_of_skill'
                    name='name_of_skill'
                    required
                />
                </div>
            </form>
        </div>
    )
}
export default SkillForm