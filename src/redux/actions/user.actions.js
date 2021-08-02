import { userConstants } from "../constants";

const getDetail = () => {

  return dispatch => {

    const username = localStorage.getItem('user')

    fetch(`http://localhost:4000/users/login/${username}`)
      .then(resp => resp.json())
      .then(resp => {

        if (resp[0]) {
          const user = {...resp[0], isLogin: true};
          dispatch({
            type: userConstants.GET_DETAIL_SUCCESS,
            payload: user
          });
          
        }else{
          dispatch({
            type: userConstants.GET_DETAIL_ERROR,
            payload: {message: 'User not valid !!!'}
          })
        }

      })
      .catch(
        error => {
          dispatch({
            type: userConstants.GET_DETAIL_ERROR,
            error
          })
        }
      )
  }
}

const login = (username, password) => {

  return dispatch => {

    fetch(`http://localhost:4000/users/login/${username}`)
      .then(resp => resp.json())
      .then(resp => {

        if (resp[0].password === password) {
          const user = {...resp[0], isLogin: true};
          dispatch({
            type: userConstants.LOGIN_SUCCESS,
            payload: user
          });
          
          localStorage.setItem('user', user.email);
        }else{
          dispatch({
            type: userConstants.LOGIN_FAILURE,
            payload: {message: 'User not valid !!!'}
          })
        }

      })
      .catch(
        error => {
          dispatch({
            type: userConstants.LOGIN_FAILURE,
            error
          })
        }
      )
  }
}

const logout = () => {

  localStorage.clear();

  return dispatch => {

    dispatch({
      type: userConstants.LOGOUT,
      payload: {}
    });
  }
}

export const userActions = {
  login,
  logout,
  getDetail
}