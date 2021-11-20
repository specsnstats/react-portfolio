import React from "react";
import profilePic from "./profile-pic.jpg";
import style from "./style.css"

function About() {
    return (
        <>
            <h1>About</h1>
            <div className="row">
                <img className="" id="profile-pic" src={profilePic} alt="profile pic"/>
                <p className="col-8">After getting my bachelors degree, I discovered that not only was it something I was not happy in, but that I could make far more money doing what I loved: Playing Videogames for an online community! I then did that for several years, and am now looking to expand my horizons and dive into something that I have been interested in for a long time: Software Development!</p>
            </div>
        </>
    )
}

export default About;