import {reducer} from "./actions";
import {createStore} from "redux";
import config from "../config";

export const store = createStore(reducer,
    config.debug ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
);
