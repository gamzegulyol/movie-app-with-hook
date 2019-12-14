import {combineReducers} from "redux";
import  movieReducer from './movieReducer';

const reducers = combineReducers({app: movieReducer});

export default reducers;
