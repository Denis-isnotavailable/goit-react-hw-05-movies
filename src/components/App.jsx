import { Routes, Route } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Home } from "./Home/Home";
import { MovieItem } from "./MovieItem/MovieItem";


export const App = () => {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
          <Route path="movies/:id" element={<MovieItem />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>        
      </Routes>
    </>    
  );
};
