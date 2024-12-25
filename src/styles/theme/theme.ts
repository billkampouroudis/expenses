import { createTheme } from '@mantine/core';

// values must be the same as in your _mantine.scss
export const breakpoints = {
  xs: '0',
  sm: '33em',
  md: '48em',
  lg: '62em',
  xl: '75em',
  xxl: '88em',
};

const theme = createTheme({
  primaryColor: 'violet',
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  breakpoints: {
    xs: breakpoints.xs,
    sm: breakpoints.sm,
    md: breakpoints.md,
    lg: breakpoints.lg,
    xl: breakpoints.xl,
  },
  fontFamily: 'Noto Sans, sans-serif',
});

export default theme;
