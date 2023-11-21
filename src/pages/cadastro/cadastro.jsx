import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../context/Context";

function Cadastro() {
    const navigate = useNavigate();

    const { users, setUsers } = useContext(Context); // -> array de objeto

    const [cadastro, setCadastro] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = [
            ...users,
            cadastro
        ];

        console.log('new user:', newUser)

        // Adicione o novo usuário ao Context
        setUsers(newUser);

        const data = JSON.stringify(newUser); // -> Converte para Json

        localStorage.setItem("users", data); // -> Guarda no Local Storage

        // Limpe o formulário após a submissão
        setCadastro({ email: "", password: "" });

        // Navegando para rota users
        navigate('/users')
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setCadastro({
            ...cadastro,
            [name]: value,
        })
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:

                    <input
                        required
                        placeholder="Digite seu email"
                        type="text"
                        name="email"
                        value={cadastro.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password:
                    <input
                        required
                        placeholder="Digite um password"
                        type="text"
                        name="password"
                        value={cadastro.password}
                        onChange={handleChange}
                    />
                </label>

                <button>Login</button>
            </form>

            <p>{users.legth > 0 && users[1].email}</p>
        </>
    )
}

export default Cadastro;