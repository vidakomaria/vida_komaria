import { Link } from "react-router-dom"
import profilPict from "../assets/vida.png"
import { dataProjects } from "../Content/projectLists"
import "./Home.css"

export default function Home () {
    const projects = dataProjects
    // console.log(projects);
    return(
        <div className="cont-home">
            <div className="profile">
                <img src={profilPict}/>
                <div className="text-profile">
                    <h2>Hello, I'm</h2>
                    <h1>VIDA KOMARIA</h1>
                    <h3>
                        Interested in Frontend Development, Web Design, and Web Development. Responsible, disciplined, and eager to learn and experience a new things.
                    </h3>
                    <div className="personal-link">
                        <a href="https://github.com/vidakomaria" target={"_blank"}>
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/vida-komaria-873b15142/" target={"_blank"}>
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/vidakomaria/" target={"_blank"}>
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="https://twitter.com/vidakom" target={"_blank"}>
                            <i class="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Preview Projects */}
            <div className="cont-projects">
                {
                    dataProjects.map((item,idx)=>{
                        return(
                            <Link to={`/projects/${item.id}`} key={item.id}>
                                <div className="card-project"
                                style={{ 
                                    backgroundImage : `url(${item.image})`,
                                }}
                                >
                                    {/* <img src={item.image}/> */}
                                        <div className="card-title">
                                            {item.title}
                                        </div>
                                </div>
                            </Link> 
                        )
                    })
                }
            </div>
        </div>
    )
}