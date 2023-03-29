import React from "react";
import { useState } from "react";
import styled from "./Guess.module.css";



function Guess() {
    const [num, setNum] = useState("");
    const [count, setCount] = useState(0);

    function MatchNumber() {
        const matchNum = Math.floor(Math.random("num") * 10);

        if (matchNum > num) {
            alert("you guessed a smaller number");
            setCount(count + 1);
            setNum(" ");

        } else if (matchNum < num) {
            alert("you guessed a Greater number .");
            setCount(count + 1);
            setNum(" ");

        } else {
            alert("congratulations you guessed the right number count:-" + count);
            setCount(0);
            setNum(" ");
        }
    }

    return (
        <div>
            <h2> Guess the Lucky Number </h2>
            <div className={styled.container}>
                <input
                    type="text"
                    value={num}
                    placeholder="Guess lucky number..."
                    onChange={(e) => setNum(e.target.value)}
                />
                <button onClick={MatchNumber} className={styled.btn}>
                    Match Number
                </button>
            </div>
        </div>
    );
}

export default Guess