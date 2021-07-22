import { 
  createContext, 
  useContext, 
  useReducer 
} from "react";

import MoviesReducer from "../reducers/MoviesReducer";
import globalStore from "../stores/globalStore";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(MoviesReducer, globalStore.movies);

  const data = {
    movies,
    dispatch
  };

  return (
    <MoviesContext.Provider value={data}>
      {children}
    </MoviesContext.Provider>
  );

};

const GetConextMovies = () => {
  return useContext(MoviesContext);
};

export { MoviesProvider, GetConextMovies };
export default MoviesContext;