import React from "react";
import '../css/App.css';
import Login from "./Login";
import {connect} from "react-redux";
import GameManager from "./GameManager";

class App
extends React.Component {
  render() {
    return (
        <div>
          {!this.props.auth.idToken && <Login/>}
          {!!this.props.auth.idToken &&
          <div className="Game">

            <GameManager/>
          </div>}
        </div>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
}), { })(App);
