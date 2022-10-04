import { Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieItemStyled, BackLinkStyled, MainInfo, AdditionalInfo } from "./MovieItem.styled";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "afc22cf5c573169849cabd6217d3b7d3";

export const MovieItem = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? "/movies";
    // console.log(backLink);
    // console.log(location);

    useEffect(() => {
        const urlDetails = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
        // const urlCast = `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
        // const urlReviews = `${API_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;

        function fetchMovie() {
            fetch(urlDetails).then(response => response.json()).then(data => {
                // console.log(data);                
                setMovie({
                    poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
                    title: data.title,
                    score: Number.parseInt(data.vote_average * 10),
                    overview: data.overview,
                    genres: data.genres.reduce((acc, genre) => (acc += genre.name + " "), "").trim()});
            }).catch(error => console.log(error));
        }

        fetchMovie();
    }, [id]);


    return (
        <main>
            <MovieItemStyled>
                <BackLinkStyled to={backLink}>Go back</BackLinkStyled>
                <MainInfo>
                    <div>
                        <img src={movie.poster} alt={movie.title} width="240" height="320" />
                    </div>
                    <div>
                        <h1>{movie.title}</h1>
                        <p>User Score: { movie.score }%</p>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <p>{movie.genres}</p>                        
                    </div>                    
                </MainInfo>

                <h2 style={{ marginTop: "12px" }}>Additional information</h2>
                <AdditionalInfo>
                    <li key={id}><Link to="cast" state={{ from: backLink }}>Cast</Link></li>
                    <li><Link to="reviews" state={{ from: backLink }}>Reviews</Link></li>           
                </AdditionalInfo>

                <Outlet />
            </MovieItemStyled>            
        </main>
    );
}