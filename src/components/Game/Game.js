import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Userguess from "../Userguess";
import Form from "../Form";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [textArr, setTextArr] = React.useState([]);
  return (
    <>
      <Userguess guesses={textArr} />
      <Form textArr={textArr} setTextArr={setTextArr} />
    </>
  );
}

export default Game;
