import { useContext } from "react"
import Context from "../../context/Context";


function Users() {
    const { users } = useContext(Context);


    return (
        <>
            <h2>Usuários</h2>
            {users.map((e, i) => (
                <div key={i}>
                    <p>{e.email}</p>
                </div>
            ))}
        </>
    )
}

export default Users;