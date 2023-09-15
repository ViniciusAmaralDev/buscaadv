export interface IUser {
  id?: string;
  type: string;
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
  isAuthenticated?: boolean;
}
