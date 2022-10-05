import { Routes, Route } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Home } from "./Home/Home";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { Movies } from "./Movies/Movies";


export const App = () => {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>        
      </Routes>
    </>    
  );
};
