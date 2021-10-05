import { createStore, applyMiddleware } from "redux";
import rootReducer, {initialState} from "../store/reducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;