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

export const userSchema: ObjectSchema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "string",
    type: "string",
    name: "string",
    email: "string",
    photo: "string?",
    office: "string?",
    password: "string",
    updatedAt: "string",
    createdAt: "string",
    address: "Address?",
    phoneNumber: "string?",
    isAuthenticated: { type: "bool", default: false },
  },
};
