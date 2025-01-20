import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Userguess({ guesses }) {
  const emptyRows = 6 - guesses.length;
  const arr = range(emptyRows);
  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => {
        const text = checkGuess(guess);
        return (
          <p className="guess" key={id}>
            {text.map((letter, index) => (
              <span className="cell" key={index}>
                {letter}
              </span>
            ))}
          </p>
        );
      })}
      {arr.map((value, index) => {
        return (
          <p className="guess" key={index}>
            {range(5).map((val, index) => (
              <span className="cell" key={index}></span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default Userguess;

//letter status
