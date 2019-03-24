import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer"
import thunk from "redux-thunk";
import { loadState, saveState } from "./localStorage";

const preLoadState = loadState();

const store = createStore(rootReducer, preLoadState, applyMiddleware(thunk));
store.subscribe(() => {
    saveState(store.getState())
});

export default store;