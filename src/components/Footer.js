
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--item"><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></div>
            <div className="footer--item"><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></div>
            <div className="footer--item"><FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon></div>
            <div className="footer--item"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></div>
            
        </div>
    )
}