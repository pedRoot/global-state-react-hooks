import { productConstants } from "../constants";

const getALL = () => {

  return dispatch => {

    fetch(`http://localhost:4000/products`)
      .then(resp => resp.json())
      .then(resp => {

        if (resp.length > 0) {

          dispatch({
            type: productConstants.ALL_PRODUCTS_SUCCESS,
            payload: resp
          });
          
        }else{

          dispatch({
            type: productConstants.ALL_PRODUCTS_ERROR,
            payload: {message: 'Not products !!!'}
          })

        }

      })
      .catch(
        error => {
          dispatch({
            type: productConstants.ALL_PRODUCTS_ERROR,
            error
          })
        }
      )
  }
}


export const productActions = {
  getALL
}