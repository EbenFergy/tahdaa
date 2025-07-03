'use client';

import useMediaQuery from './useMediaQuery';

function useGetResponsiveCount<T>(data: T[] | Record<string, T>, large: number, tablet: number, mobile: number): T[] | [string, T][] {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  // Determine the limit
  let limit = large;
  if (isMobile) limit = mobile;
  else if (isTablet) limit = tablet;

  // Return sliced data depending on type
  if (Array.isArray(data)) {
    return data.slice(0, limit);
  } else if (typeof data === 'object' && data !== null) {
    return Object.entries(data).slice(0, limit);
  }

  return [];
}

export default useGetResponsiveCount;
