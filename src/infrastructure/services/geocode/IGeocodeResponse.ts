interface ICoords {
  lat: number;
  lng: number;
}

export interface IAddressComponent {
  types: string[];
  long_name: string;
  short_name: string;
}

interface IPlusCode {
  global_code: string;
  compound_code: string;
}

interface IGeometry {
  location: ICoords;
  location_type: string;
  bounds: Record<string, ICoords>;
  viewport: Record<string, ICoords>;
}

interface IResult {
  types: string[];
  place_id: string;
  geometry: IGeometry;
  formatted_address: string;
  address_components: IAddressComponent[];
}

export interface IGeocodeResponse {
  status: string;
  results: IResult[];
  plus_code: IPlusCode;
}
