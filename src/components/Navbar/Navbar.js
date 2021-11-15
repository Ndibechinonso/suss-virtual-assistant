import React, { useState } from 'react'
import './Navbar.scss'
// import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'


const StyledHamburger = styled.div`
position: relative;
flex-direction: column;
padding: 16px 2px;
opacity: 0;
display: none;
@media screen and (max-width: 700px) {
    opacity: 1;
    display: flex;
}
.hamburger-btn {
    width: 28px;
    height: 2px;
    background-color: #000000;
    box-shadow: 0 2px rgba(255,101,47,.2);
    transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
    opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")}
}
::before, ::after {
        content: "";
        position: absolute;
        width: 28px;
        height: 2px;
        background-color: #000000;
        box-shadow: 0 2px rgba(255,101,47,.2);
        transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
    }
    ::before {
        transform: ${({ menuOpen }) => (menuOpen ? "" : "translateY(-7px)")};
        transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "")};
    }
        ::after {
        transform: translateY(7px);
        transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "")};
    }

`
const StyledHamburgerMenu = styled.div`
background: #ffffff;
top: 85px;
position: fixed;
width: 100vw;
transition: all 0.5s ease-in-out;
z-index: 1000px;
transform: ${({ menuOpen }) => (!menuOpen ? "translateY(-500px)" : "")};
transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
border-bottom: 1px solid #000000;

`



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    function setMenuState() {
        if (!menuOpen) { setMenuOpen(true) }
        else {
            setMenuOpen(false)
        }
    }

    return (
        <div>
            <div className='navbar'>
                <a
                    href="/#intro"
                    className='logo' >
                        <span data-text="S">S</span><span data-text="U">U</span><span data-text="S">S</span><span data-text="0">S</span> <span data-text="V">V</span><span data-text="I">I</span><span data-text="R">R</span><span data-text="T">T</span><span data-text="U">U</span><span data-text="A">A</span><span data-text="L">L</span>
                            </a>
                <div className='links'>
                    <div className="desktop-links">
                        <NavLink exact 
                            to="/" activeClassName="selectedLink"
                        >HOME</NavLink>
                        <NavLink to="/visual" activeClassName="selectedLink">VIRTUAL ASSISTANT</NavLink><Link to='/#about' className='about'>ABOUT</Link><Link to='/#contact'>CONTACT</Link>
                    </div>
                    <StyledHamburger onClick={setMenuState} menuOpen={menuOpen}>
                        <div className='hamburger-btn'></div>
                    </StyledHamburger>
                </div>
            </div>
            <StyledHamburgerMenu menuOpen={menuOpen}>
                <div className='mobile-links'><div
                    
                ><a href="/" onClick={setMenuState}>HOME</a></div>
                    <NavLink to="/visual" onClick={setMenuState}>VIRTUAL ASSISTANT</NavLink><div className='about'><a href="/#about" onClick={setMenuState}>ABOUT</a></div><div><a href="/#contact" onClick={setMenuState}>CONTACT</a></div></div>
            </StyledHamburgerMenu>
        </div>
    )
}

export default Navbar