import React from "react";
import { Link } from "react-router-dom"
import profilPict from "../assets/vida.png"
import { dataProjects } from "../Content/projectLists"

export default function Home () {
    const projects = dataProjects.slice(-3).reverse()

    return(
        <div className="cont-home">
            <div className="profile" id="about">
                <div className="text-profile">
                    <h2>Hello, I'm</h2>
                    <h1>VIDA KOMARIA</h1>
                    <h3>
                        Interested in Frontend Development, Web Design, and Web Development. Responsible, disciplined, and eager to learn and experience a new things.
                    </h3>
                    <div className="personal-link">
                        <a href="https://github.com/vidakomaria" target={"_blank"}>
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vida-komaria-873b15142/" target={"_blank"}>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/vidakomaria/" target={"_blank"}>
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://twitter.com/vidakom" target={"_blank"}>
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>
                <img src={profilPict}/>
            </div>

            {/* Preview Projects */}
            <div className="cont-projects">
                <div className="projectList">
                    {
                        projects.map((item,idx)=>{
                            return(
                                <div className="card-project">
                                    <Link to={`/projects/${item.id}`} key={item.id}>
                                        <img src={item.image}/>

                                        <div className="card-title">
                                            {item.title}
                                        </div>
                                    </Link> 
                                </div>
                            )
                        })
                    }
                </div>

                <div className="linkProjects">
                    <Link to={'/projects'}>
                        Projects <i className="bi bi-arrow-right-circle"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}