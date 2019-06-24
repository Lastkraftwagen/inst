import { 
  POST_SUCCESS, 
  LOAD_REQUEST, 
  LOAD_SUCCESS,
  DELETE_SUCCESS
} from "../constants";



const initialState = {
  isLoaded: false,
  items: []
};



//------------------------------R_E_D_U_C_E_R_S---------------------------------


export const loadDataReducer = (state = initialState, action) => {
console.log(action.type);

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
        isLoaded: true,
        items: state.items.filter(el => el.id !== action.element.id)
      };

    default:
      return state;
  }
}