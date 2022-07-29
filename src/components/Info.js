import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

export default function Info() {
    return(
        <div className="info">
            <div className="info--img">
            </div>
            <h1 className="info--h1">Alan Kelly</h1>
            <h4 className="info--jobtitle">Frontend Developer</h4>
            <a href="website.com" className="info--email">website.com</a>
            <div className="btn--container">
                <button className="btn btn--email"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email</button>
                <button className="btn btn--linkedin"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</button>
            </div>
        </div>
    )
}