import React from 'react'
import ProfilePic from '../images/marvinho.jpeg'

export default function Header(){
    return(
        <div className="header-container">
            <img
                src={ProfilePic}
                alt="Profile Pic"
                className="header-pic"
            />
            <div className="header-bio">
                <h3 className="header-name">Marvin Beckmann</h3>
                <p className="header-position">Product Management Intern</p>
                <p className="header-url">marvinbeckmann.website</p>
            </div>
            <div className="header-buttons">
                <a href="mailto:marvinbeckm@gmail.com">
                <button className="button-email">Email</button></a>
                <a href="http://www.linkedin.com/in/marvinbeckmann">
                <button className="button-linkedin">LinkedIn</button></a>
            </div>
        </div>
    )
}