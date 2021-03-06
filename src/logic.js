export function hangman(guess, currentState) {
  if (
    !guess || // ignore empty guesses
    currentState.guesses.includes(guess) || // ignore duplicate guesses
    getStatus(currentState) !== "playing" // ignore guesses after game end
  ) {
    return currentState;
  }
  return {
    ...currentState,
    guesses: currentState.guesses.concat(guess)
  };
}

export function getLetters(state) {
  return state.guesses.includes(state.answer)
    ? state.answer.split("")
    : state.answer
        .split("")
        .map(letter => (state.guesses.includes(letter) ? letter : null));
}

export function getNumberOfErrors(state) {
  return state.guesses.filter(guess =>
    guess.length === 1 ? !state.answer.includes(guess) : state.answer !== guess
  ).length;
}

export function getStatus(state) {
  if (getNumberOfErrors(state) === state.maxGuesses - 1) return "lost";
  if (state.guesses.includes(state.answer)) return "won";
  if (state.answer.split("").every(letter => state.guesses.includes(letter)))
    return "won";
  return "playing";
}
