import React from "react";
import acnh from "./acnh.jpg";
import manatee from "./rainbow-manatee.png";
import weather from "./weather.png";
import scheduler from "./scheduler.jpg";

function Portfolio() {
    return (
        <div className=" d-flex mx-4 my-2 flex-wrap">

            <div className="card mx-2 my-2" style={{width: "18rem"}}>
                <img src={acnh} className="card-img-top" alt="Animal Crossing backdrop" />
                <div className="card-body">
                    <h5 className="card-title">AC: NH Island Manager</h5>
                    <p className="card-text">A simple tracking site that allows you to manage what collectibles you have and
                        have not obtained in Animal Crossing: New Horizons for the Nintendo Switch</p>
                    <a href="https://specsnstats.github.io/project1-animal-crossing" className="btn btn-primary">GitHub
                        Repo</a>
                </div>
            </div>

            <div className="card mx-2 my-2"  style={{width: "18rem"}}>
                <img src={manatee} className="card-img-top" alt="Animal Crossing backdrop" />
                <div className="card-body">
                    <h5 className="card-title">Manatee Cookie-Clicker</h5>
                    <p className="card-text">A fun little cookie clicker dedicated to my coding teachers favorite animal:
                        The Manatee</p>
                    <a href="https://github.com/POlsen-92/Manatee-Clicker" className="btn btn-primary">GitHub Repo</a>
                </div>
            </div>

            <div className="card mx-2 my-2"  style={{width: "18rem"}}>
                <a href="https://specsnstats.github.io/weather-dashboard/">
                    <img src={weather} className="card-img-top" alt="Animal Crossing backdrop" /></a>
                <div className="card-body">
                    <h5 className="card-title">Weather Tracker</h5>
                    <p className="card-text">Weather Dashboard made to simply track the weather across virtually every major
                        city in the world.</p>
                    <a href="https://specsnstats.github.io/weather-dashboard/" className="btn btn-primary">GitHub Repo</a>
                </div>
            </div>

            <div className="card mx-2 my-2"  style={{width: "18rem"}}>
                <img src={scheduler} className="card-img-top" alt="Animal Crossing backdrop" />
                <div className="card-body">
                    <h5 className="card-title">Work Day Scheduler</h5>
                    <p className="card-text">Simple site to plan your 9-to-5 to increase efficiency and get more done.</p>
                    <a href="https://specsnstats.github.io/work-day-scheduler" className="btn btn-primary">GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;