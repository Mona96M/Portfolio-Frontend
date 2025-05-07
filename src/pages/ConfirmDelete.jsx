import React from 'react'
import { useParams, useNavigate } from 'react-router'
// import axios from 'axios'
import { authorizedRequest } from '../lib/api'

function ConfirmDelete() {
    const userId = localStorage.getItem('user_id')
    // I used the {type} (in the same way as the ID) to extract the resource type
    const { type ,id } = useParams()
    const navigate = useNavigate()

    async function deleteType() {
        try {
            const response = await authorizedRequest('delete', `/${type}/${id}/`)
            if (response.status === 204) {
                navigate(`/portfolio/${userId}`) 
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h2 className="title is-4 has-text-centered">
            Are you sure you want to delete this information?</h2>
        <div className="field">
            <button onClick={deleteType}  className="button custom-button">Delete</button>
            {/* i use this navigate(-1) >> go back one step  */}
            <button onClick={() => navigate(-1)} className="button custom-button">Cancel</button>
        </div></div></div>
    )
}


export default ConfirmDelete
