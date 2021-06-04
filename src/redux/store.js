import { createStore, combineReducers } from "redux";
import foodReducer from "./reducers/foodReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const combineReducer = combineReducers({
  foods: foodReducer,
});

export const store = createStore(combineReducer, composeWithDevTools());
