import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom"
import { Link } from 'react-scroll';

export default function Navbar (){
    const loc = useLocation()
    const pathName = loc.pathname
    
    return(
        <div className="navbar-cont">
            <div className="nav-lists">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    activeClass="active"
                    >
                    <button>About</button>
                </Link>
                <Link
                    to="experience"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    activeClass="active"
                    >
                    <button>Experience</button>
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    activeClass="active"
                    >
                    <button>Projects</button>
                </Link>
            </div>
        </div>
    )
}