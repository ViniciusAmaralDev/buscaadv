import { ObjectSchema } from "realm";

export const avaliationSchema: ObjectSchema = {
  name: "Avaliation",
  primaryKey: "id",
  properties: {
    id: "string",
    stars: "int",
    author: "string",
    attorney: "string",
    message: "string",
    createdAt: "string",
    updatedAt: "string",
  },
};
