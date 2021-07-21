import { useContext } from "react";

import MoviesContext from "../contexts/MoviesContext";
import UserContext from "../contexts/UserContext";
import Movie from "./Movie"

const MovieList = () => {
  const { movies } = useContext(MoviesContext);
  const { user } = useContext(UserContext);

  console.log('movie list');

  return (
    <div className="container">
      <div className="row">
        {
          movies && movies.map(movie => (
            <div className="col-md-4" key={movie.id}>
              <Movie movie={movie} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MovieList
