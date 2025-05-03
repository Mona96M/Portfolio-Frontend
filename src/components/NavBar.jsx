import React from 'react'

import { Link } from 'react-router'

function NavBar() {
    
    
    return (
        //used W3Schools as a reference for styling the nav
    <nav> 
        <h3>Portfolio</h3>
        <div className='NavLink'>
        <Link to='/login'>Log in</Link>
        <Link to='/login' className='button-link'>Get Start</Link>
        </div>
    </nav>
    )
}
export default NavBar