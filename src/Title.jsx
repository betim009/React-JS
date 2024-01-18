function Title({ poke }) {
    return (
        <div>
            <h2>{poke.nome}</h2>
            <p>{poke.tipo}</p>
            <p>{poke.cidade}</p>
            <img src={poke.url}/>
        </div>
    )
};

export default Title;