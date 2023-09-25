import { ObjectSchema } from "realm";

export const addressSchema: ObjectSchema = {
  name: "Address",
  embedded: true,
  properties: {
    latitude: "double",
    longitude: "double",
    street: "string",
    neighborhood: "string",
    city: "string",
    state: "string",
    country: "string",
    zipCode: "string",
  },
};
