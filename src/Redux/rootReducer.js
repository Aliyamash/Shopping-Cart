import { combineReducers } from "redux";
import actionReducer from "./Products/actionReducer";
import cardReducer from "./shopping/cardReducer";


export const rootReducer = combineReducers({
    produtc : actionReducer , 
    shopping : cardReducer
})