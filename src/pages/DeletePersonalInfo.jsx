import React from 'react'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'

function DeletePersonalInfo() {
    const { id } = useParams()
    const navigate = useNavigate()

    async function deletePersonalInfo() {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/personalinfo/${id}/`)
            if (response.status === 204) {
                navigate('/') 
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h2>Are you sure you want to delete this information?</h2>
            <button onClick={deletePersonalInfo}>Delete</button>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    )
}


export default DeletePersonalInfo
