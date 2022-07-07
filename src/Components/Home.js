import profilPict from "../assets/vida.png"
import "./Home.css"

export default function Home () {
    return(
        <div className="cont-home">
            <div className="profile">
                <img src={profilPict}/>
                <div className="text-profile">
                    <h2>Hello, I'm</h2>
                    <h1>VIDA KOMARIA</h1>
                    <h3>
                        Interested in Frontend Development, Web Design, and Web Development. Responsible, disciplined, and eager to learn and experience a new thing.
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
        </div>
    )
}