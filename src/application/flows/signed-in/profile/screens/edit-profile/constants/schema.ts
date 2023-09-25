import * as z from "zod";
import { IUser } from "@/application/models/IUser";
import {
  noEmptyErrorMessage,
  numberErrorMessages,
} from "@/application/constants/ZodErrorMessages";

export const createSchema = (user: IUser) =>
  z.object({
    photo: z
      .string()
      .nonempty(noEmptyErrorMessage)
      .default(user?.photo ?? undefined),
    name: z.string().nonempty(noEmptyErrorMessage).default(user.name),
    phone: z.string().nonempty(noEmptyErrorMessage).default(user?.phone),
    about: z.string().optional().default(user?.about),
    services: z
      .string()
      .nonempty(noEmptyErrorMessage)
      .default(user?.services?.join(", "))
      .transform((value) => value.split(",").map((item) => item.trim())),
    office: z.string().nonempty(noEmptyErrorMessage).default(user?.office),
    address: z
      .object({
        latitude: z
          .number(numberErrorMessages)
          .default(user?.address?.latitude),
        longitude: z
          .number(numberErrorMessages)
          .default(user?.address?.longitude),
        street: z
          .string()
          .nonempty(noEmptyErrorMessage)
          .default(user?.address?.street),
        neighborhood: z.string().default(user?.address?.neighborhood),
        city: z
          .string()
          .nonempty(noEmptyErrorMessage)
          .default(user?.address?.city),
        state: z
          .string()
          .nonempty(noEmptyErrorMessage)
          .default(user?.address?.state),
        country: z
          .string()
          .nonempty(noEmptyErrorMessage)
          .default(user?.address?.country),
        zipCode: z
          .string()
          .nonempty(noEmptyErrorMessage)
          .default(user?.address?.zipCode),
      })
      .default(user?.address),
    openingHours: z
      .string()
      .nonempty(noEmptyErrorMessage)
      .default(user?.openingHours),
  });
