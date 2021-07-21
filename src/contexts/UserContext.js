import { createContext, useState } from 'react';

const UserContext = createContext();

const initialState = {
  id: 1,
  name: 'pedroot',
  favoriteMovies: [1, 4, 7]
};

const UserProvider = ({ children }) => {

  const [user, setUser] = useState(initialState);

  const login = () => {
    setUser(initialState);
  }

  const logout = () => {
    setUser(null);
  }

  const toggleFavoriteMovieToUser = (movieId) => {

    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter(favMovId => favMovId !== movieId)
      : [...user.favoriteMovies, movieId]

    setUser({
      ...user,
      favoriteMovies
    })
  }

  const data = { user, login, logout, toggleFavoriteMovieToUser };

  return (
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;

