import { createTheme } from '@mantine/core';
import { colors } from './colors';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';
import { components } from './components';

export const theme = createTheme({
  primaryColor: 'primary',
  colors,
  spacing,
  breakpoints,
  components,
  fontFamily: 'Noto Sans, sans-serif',
});
