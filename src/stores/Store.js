import React from 'react';
import { observable, decorate, computed, action } from 'mobx';
import { default as THEME } from '../config/theme';

class Store {
  // Observables
  // ---------------------------------------------------------------------------
  navIsOpen = false;

  theme = THEME;

  openDyslexicOn = false;

  animationIsOn = true;

  fontSizeTypeString = 'base';

  // Computed
  // ---------------------------------------------------------------------------

  get activeFontFamily() {
    return process.env.NODE_ENV === 'storybook' ? THEME.fontFamily : this.theme.fontFamily;
  }

  get activeFontSize() {
    return process.env.NODE_ENV === 'storybook'
      ? THEME.fontSize[this.fontSizeTypeString]
      : this.theme.fontSize[this.fontSizeTypeString];
  }

  // Actions
  // ---------------------------------------------------------------------------

  setAnimatable() {
    return this.animationIsOn;
  }

  toggleOpenDyslexic() {
    return (this.openDyslexicOn = !this.openDyslexicOn);
  }

  /**
   * FONT OPTIONS:
   *  xs: '.75rem', // 12px
   *  sm: '.875rem', // 14px
   *  base: '1rem', // 16px
   *  lg: '1.125rem', // 18px
   *  xl: '1.25rem', // 20px
   *  '2xl': '1.5rem', // 24px
   *  '3xl': '1.875rem', // 30px
   *  '4xl': '2.25rem', // 36px
   *  '5xl': '3rem', // 48px
   */

  makeFontBigger() {
    // TODO: Switch font size to next higher in Font Size Obj
  }

  makeFontSmaller() {
    // TODO: Switch font size to next lower in Font Size Obj
  }

  resetFontSize() {
    return (this.fontSizeTypeString = 'base');
  }

  toggleNavOpen() {
    return (this.navIsOpen = !this.navIsOpen);
  }
}

decorate(Store, {
  theme: observable,
  navIsOpen: observable,
  openDyslexicOn: observable,
  animationIsOn: observable,
  fontSizeTypeString: observable,
  fontSizes: observable,

  activeFontFamily: computed,
  activeFontSize: computed,

  setAnimatable: action.bound,
  toggleOpenDyslexic: action.bound,
  makeFontBigger: action.bound,
  makeFontSmaller: action.bound,
  resetFontSize: action.bound,
  toggleNavOpen: action.bound,
});

export default new Store();
