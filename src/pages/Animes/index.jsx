import { useState, useContext } from "react";
import Context from "../../context/Context";

function Animes() {
    const {nome, setNome} = useContext(Context);
    const [nome1, setNome1] = useState("");
    const [movie, setMovie] = useState("");
    const [movies, setMovies] = useState([]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        const req = await fetch(`https://www.omdbapi.com/?apikey=58eeaad1&s=${movie}`);
        const res = await req.json();

        const data = res.Search;

        console.log(data);
        setMovies(data)
    };

    const handleClickNome = (event) => {
        event.preventDefault();

        setNome(
            nome1
        )

    }

    return (
        <div className="container">
            {nome}
            <input type="text" onChange={({target}) => setNome1(target.value)} />
            <button onClick={handleClickNome}>Clicar</button>




            <h2 className="text-center p-5">Filmes e Séries de Animes</h2>
            <div className="d-flex justify-content-center">
                <form
                    className="row row-cols-lg-auto g-3 align-items-center"
                    onSubmit={handleSubmit}
                >
                    <div className="col-12">
                        <div className="input-group">
                            <div className="input-group-text">@</div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="One piece"
                                onChange={({ target }) => setMovie(target.value)}
                            />
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>


            <div className="">
                <div className="row">
                    {movies.length > 0 ? movies.map((e, i) => (
                        <div className="col-md-4" key={i}>
                            <p>{e.Title}</p>
                            <img src={e.Poster} alt={e.Title} />
                        </div>
                    )) : (<span>Não tem</span>)}
                </div>
            </div>
        </div>
    )
}

export default Animes;