import Context from './Context';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchAll, fetchAllAcao, fetchGhibli } from '../services/home';



function Provider({ children }) {
    const [animes, setAnimes] = useState([] | null);
    const [acao, setAcao] = useState([] | null);
    const [ghibli, setGhibli] = useState([] | null);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const fetchApi = async () => {
            const dataAnimes = await fetchAll();
            const dataAcao = await fetchAllAcao();
            const dataGhibli = await fetchGhibli();

            setAnimes(dataAnimes);
            setAcao(dataAcao);
            setGhibli(dataGhibli);
        }

        fetchApi();


    }, [])

    const contextValue = {
        animes, setAnimes,
        acao, setAcao,
        ghibli, setGhibli,
        search, setSearch,
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