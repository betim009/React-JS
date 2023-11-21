import { NavLink } from "react-router-dom";
import './navBar.css'

function NavBar() {
    return (
        <>  
        <nav>
            <NavLink to="/">Paginal Inicial</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/cadastro">Registre-se</NavLink>
        </nav>
        </>
    )
}

export default NavBar;