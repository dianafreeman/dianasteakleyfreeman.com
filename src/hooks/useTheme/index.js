import React, { createContext, useContext, useState } from 'react';
import { useSpring } from '@react-spring/core';
import ThemeContext from '../../context/ThemeContext';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
