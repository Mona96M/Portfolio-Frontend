import { useState } from "react";
import { useNavigate } from "react-router";
import { setTokens } from "../lib/api";
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
    username: "",
    password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
        const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/token/`,
        formData
        );
        setTokens({
        access: response.data.access,
        refresh: response.data.refresh,
        });
        localStorage.setItem("user_id", response.data.user_id);
        navigate("/");
    } catch (err) {
        console.log(err);
        setError("Invalid username or password");
    }
    };

    return (
    <div className="container" style={{ maxWidth: "400px", marginTop: "50px" }}>
        <div className="form-box">
        <h1 className="title is-4 has-text-centered">Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="field">
            <label className="label">Username</label>
            <div className="control">
                <input
                className="input"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                />
            </div>
            </div>
            <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            </div>
            <div className="field">
            <div
                className="control"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <div className="control">
                <button className="button custom-button" type="submit">
                    Login
                </button>
                </div>
            </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        </div>
    </div>
    );
}
export default Login;
