import React from "react";
import { createRoot } from "react-dom/client";

function Form({ textArr, setTextArr }) {
  const [text, setText] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        let newArr = [...textArr, { id: crypto.randomUUID(), guess: text }];
        setTextArr(newArr);
        console.log(newArr);
        setText("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        minLength={5}
        maxLength={5}
        id="guess-input"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </form>
  );
}

export default Form;
