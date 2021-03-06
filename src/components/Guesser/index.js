import React from "react";

export const Guesser = props => {
  const callback = e => {
    e.preventDefault();
    const input = e.target.children[0];
    const value = input.value;
    input.value = "";
    props.guess(value);
  };
  return (
    <form onSubmit={callback}>
      <input
        disabled={props.disabled}
        id="guess"
        placeholder="Guess letter or word"
        autoComplete="off"
      />
    </form>
  );
};
