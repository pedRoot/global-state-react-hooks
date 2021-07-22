import { GetContextUser } from "../contexts/UserContext";
import { GetConextMovies } from "../contexts/MoviesContext";

import Movie from "./Movie"

const MovieList = () => {
  const { user } = GetContextUser();
  const { movies } = GetConextMovies();

  console.log('movie list');

  return (
    <div className="container">
      <div className="row">
        {
          user.isLogin && movies.map(movie => (
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
