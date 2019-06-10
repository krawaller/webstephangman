import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Guesses } from ".";

storiesOf("Guesses", module).add("basic", () => {
  const guesses = ["a", "e", "aeroplane"];
  return <Guesses guesses={guesses} />;
});
