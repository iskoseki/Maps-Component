interface Geometry {
  location: object;
  viewport: {
    Zh: { lo: number; hi: number };
    Jh: { lo: number; hi: number };
  };
}

interface PlusCode {
  compound_code: string;
  global_code: string;
}

interface Photo {
  height: number;
  html_attributions: string[];
  width: number;
}

export interface Store {
  business_status: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: { open_now: boolean };
  place_id: string;
  plus_code: PlusCode;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
  html_attributions: string[];
  utc_offset: undefined | number;
  photos?: Photo[];
}

