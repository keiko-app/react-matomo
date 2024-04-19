export interface TrackPageViewParams {
  documentTitle?: string;
  href?: string | Location;
  customDimensions?: boolean | CustomDimension[];
}

export interface TrackParams extends TrackPageViewParams {
  data: any[];
}

export interface TrackEventParams extends TrackPageViewParams {
  category: string;
  action: string;
  name?: string;
  value?: number;
}

export interface CustomDimension {
  id: number;
  value: string;
}
