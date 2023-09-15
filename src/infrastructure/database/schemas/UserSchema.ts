import { ObjectSchema } from "realm";

export const userSchema: ObjectSchema = {
  name: "User",
  properties: {
    id: "string",
    type: "string",
    photo: "string?",
    name: "string",
    email: "string",
    createdAt: "string",
    updatedAt: "string",
    isAuthenticated: { type: "bool", default: false },
  },
};
