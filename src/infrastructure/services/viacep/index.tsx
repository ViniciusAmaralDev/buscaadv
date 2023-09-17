import { api } from "../../api/viacep";
import { IViacepService } from "./IViacepService";

const convertZipCodeToAddress = async (zipCode: number) => {
  return await api.get(`/${zipCode}/json`);
};

export const viacepService: IViacepService = {
  convertZipCodeToAddress,
};
