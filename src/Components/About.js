import React from "react";
import profilPict from "../assets/Profile.png"

export default function Content () {
    return(
        <div className="cont-profile">
            <div className="text-profile">
                <h2>Hello, I'm</h2>
                <h1>VIDA KOMARIA</h1>
                <h3 className="profile-description">
                    Interested in Frontend Development, Web Design, and Web Development. Responsible, disciplined, and eager to learn and experience a new things.
                </h3>
                <div className="personal-link">
                    <a href="https://github.com/vidakomaria" target={"_blank"}>
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vida-komaria-873b15142/" target={"_blank"}>
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
            <div>
                <img src={profilPict} alt="profile-pict" className="profile-pict"/>
            </div>
        </div>
    )
}