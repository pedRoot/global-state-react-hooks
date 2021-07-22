import { GetContextUser } from "../contexts/UserContext";
import userType from "../types/userType";

const Movie = ({ movie }) => {
  const { user, dispatchUser } = GetContextUser();

  const isFavorite = user?.favoriteMovies.includes(movie.id);

  console.log('movie');

  const handleToogleFavorites = () => {
    dispatchUser({
      type: userType.USER_CHECK_FAVORITE_MOVIE,
      payload: movie.id
    })
  };

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
          (
            <button
              onClick={() => handleToogleFavorites()}
              className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
            >
              Favorities
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Movie
