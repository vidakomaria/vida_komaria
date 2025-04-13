import React from "react";
import { Link } from "react-router-dom"
import { dataProjects } from "../Data/dataExperience"
import { imageProjects } from "../Data/projectLists"

import { useEffect, useState } from "react";

function ImageSlideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goPrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ position: "relative", width: "800px", height: "500px" }}>
            <img
                src={images[currentIndex]}
                alt="slideshow"
                className="img-project"
            />
            <button onClick={goPrev} className="btn-prev">❮</button>

            <button onClick={goNext} className="btn-next">❯</button>

        </div>
    );
}


export default function Projects(){
    const simita = imageProjects.find(item => item.id === 2);
    const buku = imageProjects.find(item => item.id === 3);
    return(
            <div className="cont-projects">
                <h1>Projects</h1>
                <div className="cont-projects">
                    {dataProjects.map((project, index) => {
                        let images = [];
                        if (project.id === 2 && simita) {
                            images = simita.url;
                        }
                        if (project.id === 3 && buku) {
                            images = buku.url;
                        }
                
                        return (
                            <div className="card" style={{ flexDirection:'column' }} key={index}>
                                <div style={{ flexDirection:'row', display:'flex' }}>
                                    <div className="card-desc">
                                        <p>{project.desc}</p>
                                        <ul>
                                        {project.desc_list.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                        </ul>
                                    </div>
                                    <div className="card-title">
                                        <h3>{project.name}</h3>
                                        <p>({project.place})</p>
                                    </div>
                                </div>
                    
                                <div className="cont-img-project">
                                    {images.length > 0 && <ImageSlideshow images={images} />}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
}