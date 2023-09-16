import { IUser } from "./IUser";

export interface IStorageContext {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}
