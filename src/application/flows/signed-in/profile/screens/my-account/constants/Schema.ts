import * as z from "zod";
import { IUser } from "@/application/models/IUser";
import {
  invalidEmail,
  noEmptyErrorMessage,
  minimumPasswordLength,
} from "@/application/constants/ZodErrorMessages";

export const createSchema = (user: IUser) =>
  z.object({
    email: z
      .string()
      .email(invalidEmail)
      .nonempty(noEmptyErrorMessage)
      .default(user.email),
    password: z.string().min(6, minimumPasswordLength).optional(),
  });
