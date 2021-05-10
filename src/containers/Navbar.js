import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="nav">
            <NavLink to='/' id='len1' className='hoverable'>Home</NavLink>
            <NavLink to='/aboutus' id='len2' className='hoverable'>About Us</NavLink>
            <NavLink to='/search' id='len3' className='hoverable'>Search</NavLink>
            <NavLink to='/profile' id='len4' className='hoverable'>Profile</NavLink>
        </div>
    )
}

export default Navbar