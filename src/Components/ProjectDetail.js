import { useParams } from "react-router-dom"
import { dataProjects } from "../Content/projectLists"
import './ProjectDetail.css'

export default function ProjectDetail(){
    const id = useParams().id
    const project = dataProjects[id-1]
    // console.log(project.image);
    // const img = require(project.image).ReactComponent
    return(
        <div className="cont-project">
            <div className="cont-content">
                <div className="cont-img">
                    <button><i className="bi bi-chevron-left"></i></button>
                    <img src={project.image}/>
                    <button><i className="bi bi-chevron-right"></i></button>
                </div>
                <hr/>

                <div className="cont-detail">
                    <div className="title">{project.title}</div>
                    <div className="role">{project.role}</div>
                    <div className="desc">
                        <div className="title">
                            <div>Description</div>
                            <div>:</div>
                        </div>
                        <div className="detail">{project.description}</div>
                    </div>
                    <div className="utilized">
                        <div className="title">
                            <div>Utilized</div>
                            <div>:</div>
                        </div>
                        <div className="detail">{project.utilized}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}