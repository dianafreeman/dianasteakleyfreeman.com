import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions"
import { withStore, withTheme } from './decorate'

/* all files ending in *.stories.js */
configure(require.context("../src", true, /\.stories\.js$/), module)

/* ---------------- GATSBY MOCKS ----------------  */
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__PATH_PREFIX__ = ""
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addParameters({
  a11y: {
      // ... axe options
      config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    }
})

addDecorator(withA11y)
addDecorator(withTheme)
addDecorator(withStore)
