import { storiesOf } from "@storybook/react";
import React from "react";
import ContainedButtons from "./CommonButtons";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <div>
      <ContainedButtons label="Custom Label" className="dummyClassname" />
    </div>
  );
});
