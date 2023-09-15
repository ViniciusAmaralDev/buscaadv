import uuid from "react-native-uuid";
import { userService } from "../user";
import { getRealm } from "../../database";
import { IAuthService } from "./IAuthService";
import { ISignInRequest } from "./ISignInRequest";
import { IUser } from "../../../application/models/IUser";
import { userSchema } from "../../database/schemas/UserSchema";

export const signIn = async ({ email, password }: ISignInRequest) => {
  const user = await userService.filter(`email == "${email}"`);

  if (!user) throw new Error("Usuário não cadastrado");
  if (user.password !== password) throw new Error("Senha Incorreta");

  await userService.update(user.id, { isAuthenticated: true });
  return user;
};

export const signUp = async (values: IUser) => {
  const realm = await getRealm();

  const id = uuid.v4() as string;
  const date = new Date().toString();

  const user = {
    id,
    ...values,
    createdAt: date,
    updatedAt: date,
    isAuthenticated: true,
  };

  realm.write(() => {
    realm.create(userSchema.name, user);
  });

  return user;
};

export const signOut = async () => {
  const realm = await getRealm();
  const user = await userService.filter(`isAuthenticated == "${true}"`);

  const updatedUser = { ...user, isAuthenticated: false };
  realm.write(() => {
    realm.create(userSchema.name, updatedUser, Realm.UpdateMode.Modified);
  });
};

export const authService: IAuthService = { signIn, signUp, signOut };
