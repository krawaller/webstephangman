import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Word } from ".";

storiesOf("Word", module).add("_o__e", () => (
  <Word letters={[null, "o", null, null, "e"]} />
));
