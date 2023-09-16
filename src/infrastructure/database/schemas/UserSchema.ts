import { ObjectSchema } from "realm";

export const userSchema: ObjectSchema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "string",
    type: "string",
    photo: "string?",
    name: "string",
    email: "string",
    password: "string",
    createdAt: "string",
    updatedAt: "string",
    phoneNumber: "string?",
    isAuthenticated: { type: "bool", default: false },
  },
};
