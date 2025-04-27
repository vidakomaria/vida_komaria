import React from "react";
import profilPict from "../assets/Profile.png"

export default function Content () {
    return(
        <div className="cont-profile">
            <div className="text-profile">
                <h2>Hello, I'm</h2>
                <h1>VIDA KOMARIA</h1>
                <h3 className="profile-description">
                    Web Developer since 2023 with freelance experience in Frontend Development. Strong interest in Web Development, Frontend Development, Data Science, Data Analysis, and troubleshooting, with a focus on delivering high-quality, scalable web solutions.
                </h3>
                <div className="personal-link">
                    <a href="https://github.com/vidakomaria" target={"_blank"}>
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/vida-komaria-873b15142/" target={"_blank"}>
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://fastwork.id/user/vida26" target={"_blank"}>
                        <span style={{ fontWeight:'bold', textDecoration:'underline' }}>Fastwork</span>
                    </a>
                </div>
            </div>
            <div>
                <img src={profilPict} alt="profile-pict" className="profile-pict"/>
            </div>
        </div>
    )
}