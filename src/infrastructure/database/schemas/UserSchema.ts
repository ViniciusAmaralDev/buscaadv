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
    office: "string?",
    password: "string",
    updatedAt: "string",
    createdAt: "string",
    phoneNumber: "string?",
    isAuthenticated: { type: "bool", default: false },
  },
};
