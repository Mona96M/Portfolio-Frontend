import React from 'react'
import axios from 'axios'

function PersonalInfoList() {

    async function getAllInfo(){
        const response = await axios.get('http://127.0.0.1:8000/personalinfo/')
        console.log(response)
    }
    getAllInfo()

    return (
        <div>
            <h2>All Personal info</h2>

        </div>
    )
}

export default PersonalInfoList