import React from "react";
import { Link } from "react-router-dom"
import { dataProjects } from "../Content/projectLists"

export default function Projects(){
    const projectLists = dataProjects.reverse()
    // console.log(projectLists);

    return(
        <div className="cont-projects">
            <div className="header">PROJECTS</div>
            <div className="project-lists">
                {
                    projectLists.map((item, idx)=>{
                        return(
                            <>
                            <div className="project-card">
                                <Link to={`/projects/${item.id}`}>
                                    <img src={item.image}/>

                                    <div className="project-title">
                                        {item.title}
                                    </div>
                                </Link>
                            </div>
                            
                            <div className="project-card">
                                <Link to={`/projects/${item.id}`}>
                                    <img src={item.image}/>

                                    <div className="project-title">
                                        {item.title}
                                    </div>
                                </Link>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}