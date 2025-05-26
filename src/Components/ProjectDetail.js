import React from "react";
import { imagesFastwork } from "../Data/projectLists"

export default function ProjectDetail() {
    const project = imagesFastwork[0];
    return (
        <div className="cont-fastwork-detail">
            <h1>Fastwork Freelance Projects</h1>
            <div className="fastwork-list">
                {project.url.map((image, index) => (
                <div key={index} className="image-detail">
                    <img src={image} alt={`Fastwork Image ${index + 1}`} />
                </div>
                ))}
            </div>
        </div>
    );
}