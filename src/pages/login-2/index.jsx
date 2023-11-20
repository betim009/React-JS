import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import Context from "../../context/Context";


function Login2() {
    const navigate = useNavigate();

    const { users } = useContext(Context);

    const [formLogin, setFormLogin] = useState({
        email: '',
        passowrd: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();

        // Verificar se existe esse email no Context
        const { email, password } = formLogin;
        const userExists = users.some((user) => user.email === email && user.password === password);

        if (userExists) {
            // Navigate to /users
            navigate("/users");
        } else {
            alert("Usuário não cadastrado");
        }
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:

                    <input
                        required
                        type="text"
                        name="email"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password:
                    <input
                        required
                        type="text"
                        name="password"
                        onChange={handleChange}
                    />
                </label>

                <button>Login</button>
            </form>
        </>
    )
}

export default Login2;