export interface IUser {
  id?: string;
  type: string;
  name: string;
  photo: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
  isAuthenticated?: boolean;
}
