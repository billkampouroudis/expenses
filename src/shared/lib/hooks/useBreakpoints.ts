import { breakpoints } from '@/shared/config/theme/breakpoints';
import { useMediaQuery } from '@mantine/hooks';

/**
 * Determines the current screen size based on predefined breakpoints
 * @example const breakpoint = useBreakpoints();
 */
function useBreakpoints() {
  const isSm = useMediaQuery(`(min-width: ${breakpoints.sm})`);
  const isMd = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isLg = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isXl = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  if (isXl) return 'xl';
  if (isLg) return 'lg';
  if (isMd) return 'md';
  if (isSm) return 'sm';

  return 'xs';
}

export default useBreakpoints;
