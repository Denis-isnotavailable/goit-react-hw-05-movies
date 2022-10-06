import PropTypes from 'prop-types';
import { MovieMainInfoStyled } from "./MovieMainInfo.styled";


export const MovieMainInfo = ({ poster, title, score, overview, genres }) => {
    console.log(poster);
    console.log(title);

    return (
        <MovieMainInfoStyled>
            <div>
                <img src={poster} alt={title} width="240" height="320" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>User Score: {score}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres}</p>                        
            </div>
        </MovieMainInfoStyled>
    );
}

MovieMainInfo.propTypes = {    
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,  
    
}