import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Guesser } from ".";

storiesOf("Guesser", module).add("basic", () => {
  const callback = value => console.log("Received guess", value);
  return <Guesser guess={callback} />;
});
