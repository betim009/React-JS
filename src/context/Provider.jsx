import Context from './Context';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


const dataUsers = [
    { email: "admin@email.com", password: "admin123" }
];

function Provider({ children }) {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchLocalStorage = async () => {

            // Verifica se a chave 'accounts' já existe no localStorage
            if (!localStorage.getItem('accounts')) {
                // Se não existir, inicializa 'accounts' como um array vazio
                localStorage.setItem('accounts', JSON.stringify(dataUsers));
            }

            const localSt = JSON.parse(localStorage.getItem("accounts"));

            setUsers(localSt);
        };

        fetchLocalStorage();
    }, [])

    const contextValue = {
        users,
        setUsers,
    };


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;