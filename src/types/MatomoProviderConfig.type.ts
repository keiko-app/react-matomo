export type MatomoProviderConfig = {
  trackerBaseUrl: string;
  siteId: string | number;
  disableTracking?: boolean;
  urlTransformer?: (url: string) => string;
};
