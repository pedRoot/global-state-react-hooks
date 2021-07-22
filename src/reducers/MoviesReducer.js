import { moviesType } from "../types/allTypes";

const MoviesReducer = (state, action) => {
  console.log('Ejecutando: ', action.type);
  switch (action.type) {
    case moviesType.MOVIES_LIST:
    default:
      return state;
  }
};

export default MoviesReducer;