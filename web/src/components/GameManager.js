import React from "react";
import "../css/GameManager.css";

class GameManager
    extends React.Component {


    render() {
        return (
            <div className="GameManager">
                <a className="button">Create Game</a>
                <a className="button">Join Game</a>
            </div>
        );
    }
}

export default GameManager;
