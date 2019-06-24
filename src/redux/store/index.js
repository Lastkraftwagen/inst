import { createStore, applyMiddleware } from "redux";
import  mainReducer  from "../reducers";
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

export default function configureStore() {
  return createStore(
    mainReducer, 
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}