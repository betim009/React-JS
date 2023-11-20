import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login2() {
    const navigate = useNavigate();

    const [formLogin, setFormLogin] = useState({
        email: '',
        passowrd: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();

        navigate("/users");
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