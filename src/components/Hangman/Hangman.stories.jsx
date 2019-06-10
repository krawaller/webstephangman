import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Hangman } from ".";

storiesOf("Hangman", module).add("basic", () => {
  const answer = text("Answer", "aeroplane");
  return <Hangman key={answer} answer={answer} />;
});
