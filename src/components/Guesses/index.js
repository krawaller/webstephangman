import React from "react";

export const Guesses = props => {
  return (
    <React.Fragment>
      <h4>Guesses:</h4>
      <ul>
        {props.guesses.map((guess, n) => (
          <li key={n}>{guess}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
