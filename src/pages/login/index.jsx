import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = () => {
        alert(`email: ${email} \npassword: ${password}`)
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
                        onChange={({ target }) => setEmail(target.value)} />
                </label>

                <label>
                    Password

                    <input
                        type="text"
                        name="email"
                        onChange={({ target }) => setPassword(target.value)} />
                </label>

                <button>Login</button>

            </form>
        </>
    )
}

export default Login;