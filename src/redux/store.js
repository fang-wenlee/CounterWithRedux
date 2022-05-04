import { createStore, combineReducers } from "redux";
import counterReducer from "./ducks/counter";
const reduers = combineReducers({
  counter: counterReducer
});

const store = createStore(reduers);

export default store;
