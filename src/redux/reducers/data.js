import {
  LOAD_SUCCESS,
  DELETE_SUCCESS,
  POST_SUCCESS
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
        items: action.payload.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      };

    case DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.element.id)
      };

      case POST_SUCCESS:
        return {
          ...state,
          items: [...state.items, action.element].sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
      };

    default:
      return state;
  }
}