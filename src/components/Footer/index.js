import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <footer id='footer'>
            <div className='footerContainer'>
                <div className='copyright'>SUSS VIRTUAL. <span><a href='#navbar'>Website Designed by Nonso Ndibe.</a></span></div>
                <ul className='socialLinks'>
                    <li><a href='https://www.instagram.com/suss_virtual/' target="_blank"  rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href='https://twitter.com/suss_virtual?s=09' target="_blank"  rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/ndibe-susan-acipm-22265596' target="_blank"  rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="mailto:alisa2susan@gmail.com?subject = Feedback&body = Message"><i className="fas fa-at"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer