import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'

function SkillList() {
    const [skills, setSkills] = useState([])

    async function getAllSkill(){
        const response = await axios.get('http://127.0.0.1:8000/api/skills')
        console.log(response)
        setSkills(response.data)
    }
    useEffect(() => {
    getAllSkill()
}, [])
    return (
    <div>
        <h2>Skill list:</h2>
        <ul>
                {skills.map(skill => {
                    return (
                        <li key={skill.id}>
                            <Link to={`/skills/${skill.id}`}>
                            <p>{skill.name_of_skill}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
    </div>
    )
}
export default SkillList
