import PropTypes from 'prop-types';
import './card.css'
function Card({ filme }) {


    return (
        <div className='row d-flex justify-content-start'>
            {filme.map((e, i) => (
                <div className='col-12 col-lg-3 d-flex flex-column p-4' key={i}>
                    <div className='card'>
                        <img
                            className='img-fluid card-img-top'
                            src={e.Poster}
                            alt={e.Title}
                        />
                        <div className='card-body card-info'>
                            <h5 className='card-title'>{e.Title}</h5>
                            <p className='card-text'>
                                {e.Plot ? <p>{e.Plot}</p> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum aut soluta vitae quos debitis optio aperiam quo.</p>}
                            </p>
                        </div>
                        <ul className='list-group list-group-flush card-list'>
                            <li className='list-group-item'>Ano: {e.Year}</li>
                            <li className='list-group-item'>Categoria: {e.Type}</li>
                            {e.Writer && <li className='list-group-item'>Autor: {e.Writer}</li>}
                            {e.Genre && <li className='list-group-item'>Gênero: {e.Genre}</li>}
                            {e.imdbRating && <li className='list-group-item'>Nota IMDB: {e.imdbRating}</li>}

                        </ul>
                        <div className='card-body'>
                            <button className='btn w-100 btn-dark'>saiba mais</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}


Card.propTypes = {
    filme: PropTypes.arrayOf({
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Type: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;