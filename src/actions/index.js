import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  DELETE_DATA,
  DELETE_SUCCESS
} from "../constants";


//Action creators
export const loadData = () => {
  return (dispatch) => {
    dispatch({
      type: LOAD_REQUEST
    });

    return fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {
      method: 'GET'
    }).then(
      res => res.json()
    ).then(
      json => dispatch({
        type: LOAD_SUCCESS,
        payload: json
      })
    );
  };
}

export const dataDelete = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_DATA
    });
    let Url = `https://5b27755162e42b0014915662.mockapi.io/api/v1/posts/${id}`;
    return fetch(Url, {
      method: 'DELETE'
    }).then(
      res => res.json()
    ).then(
      json => dispatch({
        type: DELETE_SUCCESS,
        element: json
      })
    );
  }
}

export const postItem = (item) =>{
  
}