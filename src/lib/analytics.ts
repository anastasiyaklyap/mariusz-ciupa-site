declare global {
  interface Window {
    gtag?: (
      command: 'event',
      name: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export const trackEvent = (
  name: string,
  params?: Record<string, unknown>,
): void => {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
};
