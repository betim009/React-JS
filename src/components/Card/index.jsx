import PropTypes from 'prop-types';

function Card({ filme }) {


    return (
        <div className="col-12 col-lg-4 d-flex justify-content-center">

            <div className="card" style={{ width: "28rem", margin: ".5rem" }}>
                <img className="card-img-top" src={filme.Poster} alt={filme.Title} />
                <div className="card-body">
                    <h5 className="card-title">{filme.Title}</h5>
                    <p className="card-text">{filme.Year} | {filme.Type}</p>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni voluptatum vero! Expedita recusandae, consectetur error quas modi placeat pariatur excepturi in. Recusandae magni nam tempore ex officiis deserunt atque.</p>
                    
                    <button className="btn btn-dark">Modal</button>
                </div>
            </div>

        </div>

    )
}


Card.propTypes = {
    filme: PropTypes.shape({
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;