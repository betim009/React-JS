import "./usuarios.css"

import { useContext, useState, useEffect } from "react"
import Context from "../../context/Context";


function Users() {
    const { users } = useContext(Context);
    const [table, setTable] = useState(users);
    const [input, setInput] = useState("");

    useEffect(() => {
        setTable(users)
    }, [users]);


    const handleClick = (event) => {
        event.preventDefault();

        const findUser = table.filter((e) => e.email === input)
        
        if (findUser) {
            setTable(findUser)
        }
    };

    return (
        <div>
            <h2>Todos os Usuários</h2>
            {table.map((e, i) => (
                <div key={i}>
                    <p>{e.email}</p>
                </div>
            ))}

            <label>
                Pesquise um usuário:

                <input type="text" required value={input} onChange={({ target }) => setInput(target.value)} />
            </label>
            <button onClick={handleClick}>Pesquise</button>
        </div>
    )
}

export default Users;