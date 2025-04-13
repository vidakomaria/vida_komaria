import React from "react";
import cv from "../assets/VidaKomaria_CV.pdf"

export default function Contact(){
    return(
        <div className="cont-contact">
            <h1>MORE INFORMATION</h1>
            <div className="detail">
                <div className="email">
                    <i className="bi bi-envelope-check-fill"></i>
                    <span style={{ marginLeft:'10px' }}>vidakomaria47@gmail.com</span>
                </div>
                <div className="summary">
                    <button onClick={() => window.open(cv, "_blank")} className="btn-summary" style={{ padding:'0' }}>SUMMARY</button>
                </div>
            </div>
        </div>
    )
}