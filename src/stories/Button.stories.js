import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
// import "./styles.css";
import { Button } from "../components/Button";

// const stories = storiesOf("Buttons", module);
export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    label: {
      variant: {
        options: ["primary", "secondary"],
        control: { type: "radio" },
      },
      description: "overwritten description",
      table: {
        type: {
          summary: "something short",
          detail: "something really really long",
        },
      },
    },
    textColor: { control: "color" },
    actions: {},
  },
};

export const Primary = () => {
  return <Button />;
};
export const Secondary = () => {
  return <Button />;
};
export const Tertiary = () => {
  return <Button />;
};
