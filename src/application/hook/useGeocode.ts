import { geocodeService } from "../../infrastructure/services/geocode";
import { ICoords } from "../../infrastructure/services/geocode/ICoords";
import { IAddressComponent } from "../../infrastructure/services/geocode/IGeocodeResponse";
import { viacepService } from "../../infrastructure/services/viacep";
import { useRequestStatus } from "../context/RequestStatusContext";
import { ERequestStatus } from "../enums/ERequestStatus";

export const useGeocode = () => {
  const { setRequestStatus } = useRequestStatus();

  const filter = (query: string, data: IAddressComponent[]) => {
    return data.find((item) => item.types.includes(query))?.long_name ?? "";
  };

  const convertCoordinatesToAddress = async (values: ICoords) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      const { data } = await geocodeService.convertCoordinatesToAddress(values);
      const { address_components } = data.results[0];

      const street = filter("route", address_components);
      const neighborhood = filter("sublocality", address_components);
      const city = filter("administrative_area_level_2", address_components);
      const state = filter("administrative_area_level_1", address_components);
      const country = filter("country", address_components);
      const zipCode = filter("postal_code", address_components);

      setRequestStatus(ERequestStatus.DONE);
      return { ...values, street, neighborhood, city, state, country, zipCode };
    } catch (error) {
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  const convertAddressToCoordinates = async (value: string) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      const { data } = await geocodeService.convertAddressToCoordinates(
        value.replace("-", "")
      );
      const { address_components, geometry } = data.results[0];

      const street = filter("route", address_components);
      const neighborhood = filter("sublocality", address_components);
      const city = filter("administrative_area_level_2", address_components);
      const state = filter("administrative_area_level_1", address_components);
      const country = filter("country", address_components);
      const zipCode = filter("postal_code", address_components);
      const { lat: latitude, lng: longitude } = geometry.location;

      setRequestStatus(ERequestStatus.DONE);
      return {
        latitude,
        longitude,
        street,
        neighborhood,
        city,
        state,
        country,
        zipCode,
      };
    } catch (error) {
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  const convertZipCodeToAddress = async (value: string) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      const zipCode = Number(value.replace("-", ""));
      const { data } = await viacepService.convertZipCodeToAddress(zipCode);
      const { cep, logradouro, bairro, localidade } = data;

      setRequestStatus(ERequestStatus.DONE);
      return {
        zipCode: cep,
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: "",
        country: "",
      };
    } catch (error) {
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  return {
    convertZipCodeToAddress,
    convertCoordinatesToAddress,
    convertAddressToCoordinates,
  };
};
