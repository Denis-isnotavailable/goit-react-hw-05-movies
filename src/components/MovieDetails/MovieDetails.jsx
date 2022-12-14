import { Outlet, useLocation, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { MovieDetailsStyled, BackLinkStyled, AdditionalInfo } from "./MovieDetails.styled";
import { MovieMainInfo } from "components/MovieMainInfo/MovieMainInfo";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "afc22cf5c573169849cabd6217d3b7d3";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? "/movies";    

    useEffect(() => {
        const urlDetails = `${API_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;        

        function fetchMovie() {
            fetch(urlDetails).then(response => response.json()).then(data => {               
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
            <MovieDetailsStyled>
                <BackLinkStyled to={backLink} >Go back</BackLinkStyled>

                <MovieMainInfo poster={movie.poster} title={movie.title} score={movie.score} overview={movie.overview} genres={movie.genres}/>              

                <h2 style={{ marginTop: "12px" }}>Additional information</h2>
                <AdditionalInfo>
                    <li><Link to="cast" state={{ from: backLink }}>Cast</Link></li>
                    <li><Link to="reviews" state={{ from: backLink }}>Reviews</Link></li>           
                </AdditionalInfo>

                <Suspense fallback={<div>Loading page...</div>} >
                    <Outlet />
                </Suspense>
                
            </MovieDetailsStyled>            
        </main>
    );
}

export default MovieDetails;