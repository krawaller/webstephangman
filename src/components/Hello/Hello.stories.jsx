import { storiesOf } from "@storybook/react";
import React from "react";
import { text } from "@storybook/addon-knobs";

import { Hello } from ".";

storiesOf("Hello", module)
  .add("basic", () => <Hello name="Khodor" />)
  .add("long name", () => (
    <Hello name="a very very very very very very loooooooong name" />
  ))
  .add("knob", () => <Hello name={text("Name", "Khodor")} />);
