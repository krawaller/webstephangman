import React, { useState } from "react";

import { hangman, getLetters, getNumberOfErrors, getStatus } from "../../logic";

import { Status } from "../Status";
import { Gallow } from "../Gallow";
import { Guesser } from "../Guesser";
import { Guesses } from "../Guesses";
import { Word } from "../Word";

export const Hangman = props => {
  const [state, setState] = useState({
    maxGuesses: 5,
    guesses: [],
    answer: props.answer
  });

  const makeGuess = guess => setState(hangman(guess, state));
  const nbrOfErrors = getNumberOfErrors(state);
  const status = getStatus(state);

  return (
    <div>
      <Status status={status} remaining={state.maxGuesses - nbrOfErrors - 1} />
      <Guesser guess={makeGuess} disabled={status !== "playing"} />
      <Word letters={getLetters(state)} />
      <Gallow nbrOfErrors={nbrOfErrors} />
      <Guesses guesses={state.guesses} />
    </div>
  );
};
