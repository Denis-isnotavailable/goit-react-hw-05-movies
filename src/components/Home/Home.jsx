
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeStyled } from "components/Home/Home.styled";


const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "afc22cf5c573169849cabd6217d3b7d3";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const url = `${API_URL}trending/movie/day?api_key=${API_KEY}`;
        
        function fetchMovie() {
            fetch(url).then(response => response.json()).then(data => {                
                setMovies(data.results.map(result => ({ id: result.id, title: result.title })))
            }).catch(error => console.log(error));
        }

        fetchMovie();
    }, []);


    return (
        <HomeStyled>
            <h2>Trending today</h2>
            <ul>
                {movies.map(({ id, title }) => {
                    return (<li key={id}>
                        <Link to={`movies/${id}`} state={{ from: location }}>                            
                            {title}
                        </Link>
                    </li>)
                })}
            </ul>
        </HomeStyled>
    );
}

export default Home;