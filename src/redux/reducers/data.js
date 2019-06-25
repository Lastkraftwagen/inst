import {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  DELETE_DATA,
  DELETE_SUCCESS,
  POST_FAIL,
  POST_SUCCESS,
  DELETE_FAIL
} from "../constants";


const initialState = {
  isLoaded: false,
  items: [],
};


//------------------------------R_E_D_U_C_E_R_S---------------------------------


export const loadDataReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        items: action.payload,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.element.id)
      };

      case POST_SUCCESS:
        return {
          ...state,
          items: [...state.items, action.element]
      };
      case POST_FAIL:
        alert("Картинка завелика");

    default:
      return state;
  }
}