import { createTheme } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'violet',
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  // values must be the same as in your _mantine.scss
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  fontFamily: 'Noto Sans, sans-serif',
});

export default theme;
