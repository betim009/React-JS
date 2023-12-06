import { NavLink } from "react-router-dom";

function NavBar() {


    return (
        <>  
            <nav className="nav justify-content-center p-2 bg-dark nav-underline">
                <NavLink className="nav-link text-white" to="/">Página Inicial</NavLink>
                <NavLink className="nav-link text-white" to="/animes">Animes</NavLink>
            </nav>
        </>
    )
}

export default NavBar;