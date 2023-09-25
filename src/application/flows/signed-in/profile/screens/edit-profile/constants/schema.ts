import * as z from "zod";
import { IUser } from "@/application/models/IUser";
import {
  noEmptyErrorMessage,
  numberErrorMessages,
} from "@/application/constants/ZodErrorMessages";

type Keys = keyof IUser;

export const createSchema = (user: IUser, requiredFields?: Keys[]) =>
  z.object({
    photo: z
      .string()
      .nonempty(noEmptyErrorMessage)
      .default(user?.photo ?? undefined),
    name: z.string().nonempty(noEmptyErrorMessage).default(user.name),
    phone: z.string().nonempty(noEmptyErrorMessage).default(user?.phone),
    about: requiredFields?.includes("about")
      ? z.string().optional().default(user?.about ?? undefined)
      : z.string().nonempty(noEmptyErrorMessage).default(user?.about),
    services: requiredFields?.includes("services")
      ? z
          .string()
          .optional()
          .default(user?.services?.join(", ") ?? undefined)
          .transform((value) => value.split(",").map((item) => item.trim()))
      : z
          .string()
          .nonempty(noEmptyErrorMessage)
          .default(user?.services?.join(", "))
          .transform((value) => value.split(",").map((item) => item.trim())),
    office: requiredFields?.includes("services")
      ? z.string().optional().default(user?.office ?? undefined)
      : z.string().nonempty(noEmptyErrorMessage).default(user?.office),
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
    openingHours: requiredFields?.includes("services")
      ? z.string().optional().default(user?.openingHours ?? undefined)
      : z.string().nonempty(noEmptyErrorMessage).default(user?.openingHours),
  });
