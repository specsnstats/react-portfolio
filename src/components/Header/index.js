import React from "react";
import style from "./style.css";

function Header({currentPage, handlePageChange}) {
    return (
        <>
            <div id="header" className="jumbotron jumbotron-fluid row">
                <div className="container col-8">
                    <h1 id="jonathanName" className="display-4">Jonathan Newman</h1>
                    <p className="lead">Content Creator turned Full-Stack Developer</p>
                </div>

                <div className="col-3 display-flex nav nav-tabs">

                    <button href="about" onClick={()=>handlePageChange("About")} className={currentPage==="About" ? "nav-link active nav-item":"nav-link nav-item"}>About</button>
                    
                    <button href="portfolio" onClick={()=>handlePageChange("Portfolio")} className={currentPage==="Portfolio" ? "nav-link active nav-item":"nav-link nav-item"}>Portfolio</button>

                    <button href="contact" onClick={()=>handlePageChange("Contact")} className={currentPage==="Contact" ? "nav-link active nav-item":"nav-link nav-item"}>Contact</button>

                    <button href="about" onClick={()=>handlePageChange("Resume")} className={currentPage==="Resume" ? "nav-link active nav-item":"nav-link nav-item"}>Resume</button>

                </div>
            </div>
        </>
    )
}

export default Header;