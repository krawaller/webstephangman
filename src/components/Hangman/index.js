import React, { useState } from "react";

import { hangman, getLetters, getNumberOfErrors } from "../../logic";

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

  return (
    <div>
      <Guesser
        guess={makeGuess}
        disabled={nbrOfErrors === state.maxGuesses - 1}
      />
      <Word letters={getLetters(state)} />
      <Gallow nbrOfErrors={nbrOfErrors} />
      <Guesses guesses={state.guesses} />
    </div>
  );
};
