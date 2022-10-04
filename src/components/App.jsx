import { Routes, Route } from "react-router-dom";
import { Header } from "components/Header/Header";
import { Home } from "./Home/Home";


export const App = () => {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>Movies</div>} />
        </Route>        
      </Routes>
    </>    
  );
};
