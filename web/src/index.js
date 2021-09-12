import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {store} from "./redux/store";
import {persistStore} from "redux-persist";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react"
import {actionCreators} from "./redux/actions";

let persistor = persistStore(store);
// persistor.purge();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

window.onSignIn = function (googleUser) {
    store.dispatch(actionCreators.auth.authenticate(
        googleUser.getAuthResponse().id_token,
        googleUser.getBasicProfile().getName(),
        googleUser.getBasicProfile().getImageUrl(),
        googleUser.getBasicProfile().getEmail()
    ));
};
