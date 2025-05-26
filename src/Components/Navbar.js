import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom"
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";

export default function Navbar (){
    const loc = useLocation()
    const pathName = loc.pathname
    
    return(
        <div className="navbar-cont">
            <div className="nav-lists">
                <Link
                    to="/"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    activeClass="active"
                    >
                    <button>About</button>
                </Link>
                <ScrollLink
                    to="experience"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    activeClass="active"
                    >
                    <button>Experience</button>
                </ScrollLink>
                <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    activeClass="active"
                    >
                    <button>Projects</button>
                </ScrollLink>
            </div>
        </div>
    )
}