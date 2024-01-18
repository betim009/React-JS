import PropTypes from 'prop-types';

function Card({ filme }) {


    return (
        <div className='row d-flex justify-content-start'>
            {filme.map((e, i) => (
                <div className='col-12 col-lg-4 d-flex flex-column p-4' key={i}>
                    <div className='card'>
                        <img
                            className='img-fluid card-img-top'
                            src={e.Poster}
                            alt={e.Title}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{e.Title}</h5>
                            <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tenetur corporis natus et doloribus cum, assumenda iure facere, est fuga nihil ipsa quibusdam asperiores laboriosam. Molestias aspernatur dolorem maiores aut officiis!
                            </p>
                        </div>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>Ano: {e.Year}</li>
                            <li className='list-group-item'>Gênero: {e.Type}</li>
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