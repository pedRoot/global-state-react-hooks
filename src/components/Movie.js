import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Movie = ({ movie }) => {
  const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

  const isFavorite = user?.favoriteMovies.includes(movie.id);

  console.log('movie');

  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="img-top"
        style={{ height: '260px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>

        {
          user
            ? (
              <button
                onClick={() => toggleFavoriteMovieToUser(movie.id)}
                className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
              >
                Favorities
              </button>
            )
            : ''
        }
      </div>
    </div>
  )
}

export default Movie
