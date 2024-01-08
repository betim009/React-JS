import { useContext } from "react";
import Context from "../../context/Context";
import Card from "../../components/Card";

function Home() {
    const { animes, acao, ghibli } = useContext(Context);


    if (!animes || !acao) {
        return <span>Carregando...</span>
    }
    return (
        <>
            <h1 className="display-5 p-5 text-center border-bottom border-dark">BestFlix</h1>
            <div className="container">

                <div className="row">

                    <h2 className="text-center mt-5 mb-2">Filmes de Animes</h2>
                    {animes.map((e, i) => (
                        <Card key={i} filme={e} />
                    ))}

                    <h2 className="text-center mt-5 mb-2">Filmes de Ação</h2>
                    {acao.map((e, i) => (
                        <Card key={i} filme={e} />
                    ))}

                    <h2 className="text-center mt-5 mb-2">Filmes do Stúdio Ghibli</h2>
                    {ghibli.map((e, i) => (
                        <Card key={i} filme={e} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default Home;