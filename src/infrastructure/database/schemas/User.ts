import { ObjectSchema } from "realm";

export const userSchema: ObjectSchema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "string",
    type: "string",
    name: "string",
    email: "string",
    photo: "string?",
    about: "string?",
    phone: "string?",
    office: "string?",
    password: "string",
    updatedAt: "string",
    createdAt: "string",
    address: "Address?",
    openingHours: "string?",
    isAuthenticated: { type: "bool", default: false },
    services: { type: "list", objectType: "string", default: [] },
  },
};
