import { storiesOf } from "@storybook/react";
import React from "react";
import { select } from "@storybook/addon-knobs";

import { Gallow } from ".";

storiesOf("Gallow", module).add("4", () => (
  <Gallow nbrOfErrors={select("Frame", [0, 1, 2, 3, 4], 0)} />
));
