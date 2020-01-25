import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions"
import { colors } from '../src/config/theme/tailwind'

/* automatically import all files ending in *.stories.js */
configure(require.context("../src", true, /\.stories\.js$/), module)

/* DECORATORS */
const Theme = story => (
    <div style={{ width: "100vw", height: '100vh',  padding: 'unset', margin: 'unset', backgroundColor: colors.background , textAlign: "center"}}>
      {story()}
    </div>
  );


addDecorator(Theme)

addParameters({
  a11y: {
      // ... axe options
      config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    }
})

addDecorator(withA11y)


/* GATSBY CONFIG */

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
