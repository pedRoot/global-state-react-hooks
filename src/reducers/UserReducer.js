import { userType } from "../types/allTypes.js";

const UserReducer = (state, action) => {
  switch (action.type) {
    case userType.USER_SIGNIN:
      return {
        ...state,
        isLogin: !action.payload.isLogin
      };

    case userType.USER_SIGNOUT:
      return {
        ...state,
        isLogin: !action.payload.isLogin
      };

    case userType.USER_CHECK_FAVORITE_MOVIE:

      const isFavorite = state.favoriteMovies.includes(action.payload);
      const favoriteMovies = isFavorite
        ? state.favoriteMovies.filter(favMovId => favMovId !== action.payload)
        : [...state.favoriteMovies, action.payload]
    
      return {
        ...state,
        favoriteMovies
      };

    default:
      return state;
  }
};

export default UserReducer;
