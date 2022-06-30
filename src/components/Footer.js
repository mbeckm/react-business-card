import React from 'react'
import TwitterLogo from '../images/Twitter-Icon.png'
import FacebookLogo from '../images/Facebook-Icon.png'
import InstagramLogo from '../images/Instagram-Icon.png'

export default function Footer(){
    return(
        <div className="footer-container">
            <img
                src={TwitterLogo}
                alt="Twitter icon"
                className="footer-icon"

            />
            <img
                src={FacebookLogo}
                alt="Facebook icon"
                className="footer-icon"
            />
            <img
                src={InstagramLogo}
                alt="Instagram icon"
                className="footer-icon"
            />
        </div>
    )
}