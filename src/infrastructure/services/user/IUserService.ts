import { IUser } from "../../../application/models/IUser";

export interface IUserService {
  getAll: () => Promise<IUser[]>;
  get: (id: string) => Promise<IUser>;
  delete: (id: string) => Promise<void>;
  filter: (query: string) => Promise<IUser>;
  update: (id: string, value: Partial<IUser>) => Promise<void>;
}
