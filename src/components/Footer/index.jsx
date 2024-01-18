import { Link } from "react-router-dom";
import './footer.css'


function Footer() {

    return (
        <footer className="d-flex justify-content-center flex-column text-center bg-dark text-white p-5">
            <h3>Bebeto<br></br>Projeto filmes e séries</h3>
            <div className="d-flex flex-row justify-content-center gap-3 mt-2">
                <Link to='https://github.com/betim009/React-JS' target="_blank"><i className="bi bi-github text-white"></i></Link>
                <Link to='https://www.omdbapi.com/' target="_blank"><i className="bi bi-database-fill text-white"></i></Link>
            </div>
            <code className="mt-3">2024</code>
        </footer>
    )

}

export default Footer;