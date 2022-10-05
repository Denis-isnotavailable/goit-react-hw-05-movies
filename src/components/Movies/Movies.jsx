import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MoviesStyled } from "./Movies.styled";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "afc22cf5c573169849cabd6217d3b7d3";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const location = useLocation();    


    useEffect(() => {
        const url = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;

        if (query === "") {
            return;
        }
        
        function fetchMovie() {
            fetch(url).then(response => response.json()).then(data => {   
                // console.log(data);
                setMovies(data.results.map(result => ({ id: result.id, title: result.title })))
            }).catch(error => console.log(error));
        }

        fetchMovie();
    }, [query]);

    const handleSubbmit = e => {
        e.preventDefault();        
        setQuery(e.target.query.value);
        e.target.query.value = "";
    }


    return (
        <MoviesStyled>
            <form action="" onSubmit={handleSubbmit}>
                <input type="text" name="query" />
                <button type="submit">Search</button>
            </form>
            
            
            <ul>
                {movies.map(({ id, title }) => {
                    return (<li key={id}>
                        <Link to={`${id}`} state={{ from: location }}>                            
                            {title}
                        </Link>
                    </li>)
                })}
            </ul>
        </MoviesStyled>
    );
}