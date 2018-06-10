
import React from "react";
import "./Score.css";

const Score = props => (
    <div>
        <ul className="score">
            <li
                className={props.message.indexOf('wrong') !== -1 ? 
                    "guess-wrong" : 
                    props.message.indexOf('right') !== -1 ?
                        "guess-right" :
                        "reg"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.runningScore}</span> | Max Score: {props.maxScore}</li>
        </ul>
    </div>
);

export default Score;