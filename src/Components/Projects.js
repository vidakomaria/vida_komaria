import React from "react";
import { Link } from "react-router-dom"
import { dataProjects } from "../Data/dataExperience"

export default function Projects(){
    return(
            <div className="cont-projects">
                <h1>Projects</h1>
                <div className="cont-projects">
                    {dataProjects.map((project, index) => (
                        <div className="card" key={index}>
                            <div className="card-desc">
                                <p>{project.desc}</p>
                                <ul>
                                    {project.desc_list.map((desc, i) =>(
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-title">
                                <h3>{project.name}</h3>
                                <p>({project.place})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
}