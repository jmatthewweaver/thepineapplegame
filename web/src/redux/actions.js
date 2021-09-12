import {createActions, handleActions} from "redux-actions";
import config from "../config";
import localForage from "localforage";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import persistReducer from "redux-persist/lib/persistReducer";
import {combineReducers} from "redux";

const persistConfig = {
    storage: localForage,
    stateReconciler: autoMergeLevel1,
    debug: config.debug
};

export const actionCreators = createActions({
    'AUTH': {
        'AUTHENTICATE': (idToken, name, imageUrl, email) => ({
            idToken,
            name,
            imageUrl,
            email
        }),
        'DEAUTHENTICATE': () => ({}),
        'SET_USER': (user) => ({user})
    }
});

const authReducer = persistReducer({
    ...persistConfig,
    key: 'auth'
}, handleActions({
        'AUTH/AUTHENTICATE': (state, action) => ({
            ...state,
            idToken: action.payload.idToken,
            name: action.payload.name,
            imageUrl: action.payload.imageUrl,
            email: action.payload.email
        })
    },
    {
        idToken: null,
        name: null,
        imageUrl: null,
        email: null
    }));

export const reducer = persistReducer({
        ...persistConfig,
        key: 'data',
    },
    combineReducers({
        auth: authReducer
    }), {});
