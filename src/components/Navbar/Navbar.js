import React from 'react'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () =>{
    return(
        <div className='navbar'><Link
        to="/#intro"
        className='logo' >SUSS VIRTUAL</Link><Link
              to="/#intro"
            >Home</Link>
         <Link to="/visual">Virtual Assistant</Link><Link to='/#about' className='about'>About</Link><Link to='/#contact'>Contact</Link>
        </div>
    )
}

export default Navbar