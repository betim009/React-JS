import { NavLink } from "react-router-dom";

function NavBar() {


    return (

        <nav className="navbar navbar-expand-lg bg-dark nav-underline">
            <div className="container">
                <NavLink className="nav-link text-white" to="/">Página Inicial</NavLink>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link text-white" to="/movies">Filmes</NavLink>
                        <NavLink className="nav-link text-white" to="/series">Séries</NavLink>
                        <NavLink className="nav-link text-white" to="/animes">Animes</NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;