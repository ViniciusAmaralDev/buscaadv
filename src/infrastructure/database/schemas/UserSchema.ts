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

export const openingHoursSchema: ObjectSchema = {
  name: "OpeningHours",
  embedded: true,
  properties: {
    end: "string",
    start: "string",
    days: { type: "list", objectType: "string" },
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
    phone: "string?",
    office: "string?",
    password: "string",
    updatedAt: "string",
    createdAt: "string",
    address: "Address?",
    openingHours: "OpeningHours?",
    isAuthenticated: { type: "bool", default: false },
    services: { type: "list", objectType: "string", default: [] },
  },
};
