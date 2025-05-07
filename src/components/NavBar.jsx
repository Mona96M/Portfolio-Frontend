import React from 'react'
import { Link, useNavigate } from 'react-router'
function NavBar() {
    const navigate = useNavigate()
    const isLoggedIn = !!localStorage.getItem('access_token')

    function logout(){
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        navigate('/')
        }
    
    return (
        //used W3Schools as a reference for styling the nav / use bulma also
        <nav className="navbar has-shadow" >
            <div className="navbar-brand">
            <h1 className="navbar-item" style={{ fontSize: '30px' }}>
            Portfo<span style={{ color: '#F45A84' }}>lio</span>
    </h1>
    </div>
    <div className="navbar-menu">
    <div className="navbar-end">
        {!isLoggedIn && (
            <div className="navbar-item">
            <div className="buttons">
            <Link to='/login' className="NavLink">Log in</Link>
            <Link to='/signup' className='button-link' >SignUp</Link> 
            </div>
            </div>)}
        {isLoggedIn && (
            <div className="navbar-item">
            <div className="buttons">
            <Link to="/portfolio/:personalId" className="NavLink">My CV</Link>
        <Link to="/education/new" className="NavLink">Add Education</Link>
        <Link to="skill/new"className="NavLink" >Add Skill</Link>
        <Link to="project/new" className="NavLink">Add Project</Link>
        <button type='submit' onClick={logout} className='button-link'>Log out</button>
        </div></div>)}
    </div></div></nav>
    )
}
export default NavBar