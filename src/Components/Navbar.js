import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom"
import "./Navbar.css"

export default function Navbar (){
    const loc = useLocation()
    const pathName = loc.pathname
    
    return(
        <div className="navbar-cont">
            <div className="nav-lists">
                <Link to={'/'}>
                    <button className={pathName==='/'?'active':''}>HOME</button>
                    {
                        pathName==='/'?<><hr/></>:''
                    }
                </Link>

                <Link to={'sumarry'}>
                    <button className={pathName==='/sumarry'?'active':''}>SUMARRY</button>
                    {
                        pathName==='/sumarry'?<><hr/></>:''
                    }
                </Link>

                <Link to={'projects'}>
                    <button className={pathName.includes('/projects') ?'active':''}>PROJECTS</button>
                    {
                        pathName.includes('/projects')?<><hr/></>:''
                    }
                </Link>
            </div>
        </div>
    )
}