import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Link to="/cadastro">
                <h3>Registre-se</h3>
            </Link>

            <Link to="/cadastro">
                <h3>Entre com com seu email e senha</h3>
            </Link>
        </>
    )
}

export default Home;