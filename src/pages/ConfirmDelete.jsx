import React from 'react'
import { useParams, useNavigate } from 'react-router'
// import axios from 'axios'
import { authorizedRequest } from '../lib/api'

function ConfirmDelete() {
    // I used the {type} (in the same way as the ID) to extract the resource type
    const { type ,id } = useParams()
    const navigate = useNavigate()

    async function deleteType() {
        try {
            const response = await authorizedRequest('delete', `/${type}/${id}/`)
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
            <button onClick={deleteType}>Delete</button>
            {/* i use this navigate(-1) >> go back one step  */}
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    )
}


export default ConfirmDelete
