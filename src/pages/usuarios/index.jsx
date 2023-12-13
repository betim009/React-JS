import { useContext, useState, useEffect } from "react";
import Context from "../../context/Context";
import "./usuarios.css"; // Certifique-se de que o caminho está correto

function Users() {
    const { users, setUsers } = useContext(Context);
    const [table, setTable] = useState(users);
    const [input, setInput] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        setTable(users);
    }, [users]);

    const handleClick = (event) => {
        event.preventDefault();

        const findUser = users.filter((e) => e.email === input);
        setTable(findUser);
    };

    const handleClickEdit = (index) => {
        setEditingIndex(index);

        const modal = document.getElementById("modalEdit");
        modal.showModal();
    };

    const handleClickRemove = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        setTable(updatedUsers);
    };

    const handleChangeEdit = (event) => {
        setEditEmail(event.target.value);
    };

    const handleCloseModal = () => {
        const modal = document.getElementById("modalEdit");
        modal.close();
    };

    const handleSaveEdit = () => {
        if (editingIndex !== null) {
            const updatedUsers = [...users];
            updatedUsers[editingIndex].email = editEmail;
            setUsers(updatedUsers);

            // Reset states
            setEditingIndex(null);
            setEditEmail("");
            setTable(updatedUsers);

            const modal = document.getElementById("modalEdit");
            modal.close();
        }
    };

    if (!table) {
        return <span>Carregando</span>;
    }

    return (
        <div>
            <h2>Todos os Usuários</h2>
            <label>
                Pesquise um usuário:
                <input
                    type="text"
                    value={input}
                    onChange={({ target }) => setInput(target.value)}
                />
            </label>
            <button onClick={handleClick}>Pesquise</button>

            {table.map((e, i) => (
                <div key={i}>
                    <p>{e.email}</p>
                    <button onClick={() => handleClickEdit(i)}>Editar</button>
                    <button onClick={() => handleClickRemove(i)}>Deletar</button>
                </div>
            ))}

            <dialog id="modalEdit">
                <label htmlFor="editEmail">
                    Digite o novo email:
                    <input
                        type="email"
                        value={editEmail}
                        onChange={handleChangeEdit}
                    />
                </label>
                <button onClick={handleSaveEdit}>Salvar</button>
                <button onClick={handleCloseModal}>Cancelar</button>
            </dialog>
        </div>
    );
}

export default Users;
