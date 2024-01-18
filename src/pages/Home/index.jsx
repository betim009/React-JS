import { useContext, useState } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";


import Card from "../../components/Card";

function Home() {
    const { animes, acao, ghibli, setSearch } = useContext(Context);
    const [inputSearch, setInputSearch] = useState('');


    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();

        const req = await fetch(`https://www.omdbapi.com/?apikey=58eeaad1&s=${inputSearch}`);
        const res = await req.json();

        const data = res.Search;

        console.log(inputSearch);

        setSearch(data);
        setInputSearch('');
        navigate(`/${data[0].Title}`)
    };


    if (!animes || !acao) {
        return <span>Carregando...</span>
    }

    return (
        <>
            <h1 className="display-5 p-5 text-center border-bottom border-dark">
                Bebeto <br></br>Projeto filmes e séries
            </h1>
            <div className="container">

                <div className="d-flex p-3 justify-content-end">
                    <div className="d-flex">
                        <input
                            type="text"
                            placeholder="One Piece"
                            className="form-control"
                            value={inputSearch}
                            onChange={({ target }) => setInputSearch(target.value)}
                        />
                        <button onClick={handleSearch} className="btn btn-dark ms-2">Pesquisar</button>

                    </div>
                </div>

                <h2 className="text-center mt-3 mb-2">Sugestões de Animes</h2>
                <Card filme={animes} />
                <h2 className="text-center mt-3 mb-2">Sugestões do Studio Ghibli</h2>
                <Card filme={ghibli} />
                <h2 className="text-center mt-3 mb-2">Sugestões de Ação</h2>
                <Card filme={acao} />

            </div>
        </>
    )
}

export default Home;