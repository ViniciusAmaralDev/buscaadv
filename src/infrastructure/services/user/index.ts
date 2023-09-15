import { getRealm } from "../../database";
import { IUserService } from "./IUserService";
import { IUser } from "../../../application/models/IUser";
import { userSchema } from "../../database/schemas/UserSchema";

const get = async (id: string) => {
  const realm = await getRealm();
  return realm
    .objectForPrimaryKey(userSchema.name, id)
    .toJSON() as any as IUser;
};

const getAll = async () => {
  const realm = await getRealm();
  const users = realm.objects(userSchema.name).toJSON() as any as IUser[];
  return users ?? [];
};

const update = async (id: string, values: Partial<IUser>) => {
  const realm = await getRealm();

  const user = await userService.get(id);
  const updatedUser = { id, ...user, ...values };

  realm.write(() => {
    realm.create(userSchema.name, updatedUser, Realm.UpdateMode.Modified);
  });
};

const deleteUser = async (id: string) => {
  const realm = await getRealm();
  realm.write(() => {
    realm.delete(realm.objectForPrimaryKey(userSchema.name, id));
  });
};

export const filter = async (query: string) => {
  const realm = await getRealm();
  return realm.objects(userSchema.name).filtered(query)[0] as any as IUser;
};

export const userService: IUserService = {
  get,
  filter,
  getAll,
  update,
  delete: deleteUser,
};
