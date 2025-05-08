import React from "react";

import { useState } from "react";
import axios from "axios";
import { setTokens } from "../lib/api";
import { useNavigate } from "react-router";

function SignUp() {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await axios.post(`${baseUrl}/signup/`, {
        username,
        email,
        password,
        });
      // console.log(response.data)
        setTokens(response.data);
        navigate("/portfolio/add");
    } catch (err) {
        console.log(err)
        
    }
    }

    return (
    <div
        className="is-flex is-justify-content-center is-align-items-center"
        style={{ minHeight: "100vh" }}
    >
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">SignUp</h1>
        <form onSubmit={handleSubmit}>
            <div className="field">
            <label className="label">Username<span style={{color:'red'}}>*</span></label>
            <div className="control">
                <input
                className="input"
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                />
            </div>
            </div>
            <div className="field">
            <label className="label">Password<span style={{color:'red'}}>*</span></label>
            <div className="control">
                <input
                className="input"
                type="password"
                placeholder="password"
                name="password"
                required
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                
                />
                <p style={{fontSize: '12px' , color:'gray'}}>must have 8-16 characters </p>
                <p style={{fontSize: '12px' , color:'gray'}}>must have one special characters @,#,%,$ </p>
            </div>
            </div>

            <div className="field">
            <label className="label">Email<span style={{color:'red'}}>*</span></label>
            <div className="control">
                <input
                className="input"
                type="text"
                placeholder="email"
                name="email"
                required
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                />
            </div>
            </div>
            <div className="field">
            <div
                className="control"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <button type="submit" className="button custom-button">
                sign up
                </button>
            </div>
            </div>
        </form>
        </div>
    </div>
    );
}

export default SignUp;
