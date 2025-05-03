import React from 'react'

function EducationForm() {
    return (
        <div>
            <form>
                <div>
                <label htmlFor='university'>University</label>
                <input
                    id='university'
                    name='university'
                    required
                    
                />
                </div>
                <div>
                <label htmlFor='major'>Major</label>
                <input 
                    id='major'
                    name='major'
                    required
                    
                />
                </div>
            </form>
        </div>
    )
}
export default EducationForm