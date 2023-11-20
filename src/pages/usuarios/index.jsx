import { useContext } from "react"
import Context from "../../context/Context";


function Users() {
    const { users } = useContext(Context);

    return (
        <>
            <h2>Usuários</h2>
            <h5>{users[0].email}</h5>
        </>
    )
}

export default Users;