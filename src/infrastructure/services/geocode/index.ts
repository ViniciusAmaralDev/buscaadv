import { GOOGLE_API_KEY } from "@env";
import { api } from "../../api/geocode";
import { IGeocodeService } from "./IGeocodeService";

const convertCoordinatesToAddress = async ({ latitude, longitude }) => {
  return await api.get(
    `/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
  );
};

const convertAddressToCoordinates = async (address: string) => {
  return await api.get(`/json?address=${address}&key=${GOOGLE_API_KEY}`);
};

export const geocodeService: IGeocodeService = {
  convertCoordinatesToAddress,
  convertAddressToCoordinates,
};
