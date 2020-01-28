import React from "react";
import { action } from "@storybook/addon-actions";
import NavTree from ".";

export const byDefault = () => <NavTree onClick={action('You Clicked!')}> A Default NavTree </NavTree>;

export default {
  title: "NavTree",
  component: NavTree
};
