import React from "react";
import profilPict from "../assets/Profile.png"
import { dataExperience } from "../Data/dataExperience"

export default function Content () {

    return(
        <div className="cont-experience">
            <h1>Experience</h1>
            <div className="cont-experience">
                {dataExperience.map((exp, index) => (
                    <div className="card" key={index}>
                        <div className="card-title">
                            <h3>{exp.name}</h3>
                            <p>({exp.place})</p>
                            <p>{exp.time.start} - {exp.time.end}</p>
                        </div>
                        <div className="card-desc">
                            <ul>
                                {exp.description.map((desc, i) =>(
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}