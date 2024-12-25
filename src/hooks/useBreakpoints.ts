import { useMediaQuery } from '@mantine/hooks';
import { breakpoints } from '../styles/theme/theme';

/**
 * Determines the current screen size based on predefined breakpoints
 * @example const breakpoint = useBreakpoints();
 */
function useBreakpoints() {
  const isSm = useMediaQuery(`(min-width: ${breakpoints.xs})`);
  const isMd = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const isLg = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isXl = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  if (isXl) return 'xl';
  if (isLg) return 'lg';
  if (isMd) return 'md';
  if (isSm) return 'sm';

  return 'xs';
}

export default useBreakpoints;
