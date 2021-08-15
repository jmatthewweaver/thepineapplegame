import React from "react";
import '../css/Login.css';

import pineapple from '../img/pineapple.png';

class Login
    extends React.Component {

    render() {
        return (
            <div className="Login">
                <h2>The Pineapple Game</h2>
                <img src={pineapple} alt="pineapple" />
            </div>
        );
    }
}

export default Login;
