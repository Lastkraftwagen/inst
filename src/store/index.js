import { createStore, applyMiddleware } from "redux";
import  mainReducer  from "../reducers";
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {
  return createStore(
    mainReducer, 
    applyMiddleware(thunkMiddleware)
  )
}