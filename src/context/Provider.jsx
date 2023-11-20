import Context from './Context';
import PropTypes from 'prop-types';
import { useState } from 'react';


const dataUsers = [
    { email: "admin@email.com", password: "admin123" }
];

function Provider({ children }) {
    const [users, setUsers] = useState(dataUsers);

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