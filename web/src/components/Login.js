import React from "react";
import '../css/Login.css';

import pineapple from '../img/pineapple.png';

class Login
    extends React.Component {

    render() {
        return (
            <div className="Login">
                <div className="name">The<br/>Pineapple<br/>Game</div>
                <div className="image">
                    <img src={pineapple} alt="pineapple"/>
                </div>
                <div className="signin">
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                </div>
            </div>
        );
    }
}

export default Login;
