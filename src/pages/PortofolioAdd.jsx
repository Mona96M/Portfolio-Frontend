import React from 'react'
// import axios from 'axios'
import PersonalInfoForm from '../components/PortfolioForm/PersonalInfoForm'
import { useState } from 'react'
import EducationForm from '../components/PortfolioForm/EducationForm'
import SkillForm from '../components/PortfolioForm/SkillForm'
import ProjectForm from '../components/PortfolioForm/ProjectForm'
import { useNavigate } from 'react-router'
import { authorizedRequest } from '../lib/api'
import { toast, ToastContainer } from 'react-toastify'


function PortofolioAdd() {
    const navigate = useNavigate()
    //used a single object for form state 
    //i used this reference https://react.dev/learn/updating-objects-in-state
    const [personalData, setPersonalData] = useState({
        full_name: '',
        phone: '',
        linkedin: '',
        bio: ''
    })
    const [educationData, setEducationData] = useState ({
        university:'',
        major:''
    })
    const [skillData, setSkillData] = useState ({
        name_of_skill:''
    })
    const [projectData, setProjectData] = useState({
        project_name: '',
        description: '',
        project_url: ''
    })
    async function handleSubmit(event){
        event.preventDefault();
        console.log("Handle Submit is running");
    // This is my first time handling multiple API endpoints in a single submission.
    // After researching I implemented this solution using axios and await
       //I read about Promise.all I will try it after the bootcamp
        try {
            const personalResponse = await authorizedRequest('post', '/personalinfo/', personalData)
            const personalId = personalResponse.data.id;
            await authorizedRequest('post', '/educations/', educationData)
            await authorizedRequest('post', '/skills/', skillData)
            await authorizedRequest('post', '/projects/', projectData)
    
            console.log("All data submitted successfully!")
            toast.success("Success! Your portfolio was created.")
            setPersonalData({ 
                full_name: '', 
                phone: '', 
                linkedin: '', 
                bio: '' 
            });
            setEducationData({ 
                university: '',
                major: '' 
            });
            setSkillData({ 
                name_of_skill: '' 
            });
            setProjectData({ 
                project_name: '', 
                description: '', 
                project_url: '' });
                //I researched how to redirect the user to portoflio page after successfully submitting the form 
                //this is one of the sites I referred to https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
                setTimeout(() => {
                    navigate(`/portfolio/${personalId}`);
                
                }, 3000)
        
        } catch (error) {
            console.log("Error during submission:", error.response?.data || error.message);
        }
    };
    
    return (
        
        <div className="container" style={{ maxWidth: "550px", marginTop: "90px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Fill out the form</h1>
        <form onSubmit={handleSubmit}>
        <div className="field">
        <ToastContainer/>
        <PersonalInfoForm
            personalData={personalData}
            setPersonalData={setPersonalData}
        />
        <EducationForm
            educationData={educationData}
            setEducationData={setEducationData}
        />
        <SkillForm
            skillData={skillData}
            setSkillData={setSkillData}
        />
        <ProjectForm
            projectData={projectData}
            setProjectData={setProjectData}
        />
        <div className="field">
            <div
                className="control"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <div className="control"></div>
        <button type='submit' className="button custom-button">Create</button></div>
            </div>
            </div>
        </form> </div>
        </div>
        
    )
}

export default PortofolioAdd