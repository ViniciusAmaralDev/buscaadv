import { geocodeService } from "../../infrastructure/services/geocode";
import { ICoords } from "../../infrastructure/services/geocode/ICoords";
import { IAddressComponent } from "../../infrastructure/services/geocode/IGeocodeResponse";
import { viacepService } from "../../infrastructure/services/viacep";

export const useGeocode = () => {
  const filter = (query: string, data: IAddressComponent[]) => {
    return data.find((item) => item.types.includes(query))?.long_name ?? "";
  };

  const convertCoordinatesToAddress = async (values: ICoords) => {
    const { data } = await geocodeService.convertCoordinatesToAddress(values);
    const { address_components } = data.results[0];

    const street = filter("route", address_components);
    const neighborhood = filter("sublocality", address_components);
    const city = filter("administrative_area_level_2", address_components);
    const state = filter("administrative_area_level_1", address_components);
    const country = filter("country", address_components);
    const zipCode = filter("postal_code", address_components);

    return { ...values, street, neighborhood, city, state, country, zipCode };
  };

  const convertZipCodeToAddress = async (value: string) => {
    const zipCode = Number(value.replace("-", ""));
    const { data } = await viacepService.convertZipCodeToAddress(zipCode);
    const { cep, logradouro, bairro, localidade } = data;

    return {
      zipCode: cep,
      street: logradouro,
      neighborhood: bairro,
      city: localidade,
      state: "",
      country: "",
    };
  };

  return { convertCoordinatesToAddress, convertZipCodeToAddress };
};
