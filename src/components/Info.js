import React from "react"
export default function Info() {
    return(
        <div className="info">
            <div className="info--img">
            </div>
            <h1 className="info--h1">Alan Kelly</h1>
            <h4 className="info--jobtitle">Frontend Developer</h4>
            <a href="website.com" className="info--email">website.com</a>
            <div className="btn--container">
                <button className="btn btn--email">Email</button>
                <button className="btn btn--linkedin">LinkedIn</button>
            </div>
        </div>
    )
}