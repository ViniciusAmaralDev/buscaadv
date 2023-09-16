export interface IUser {
  id?: string;
  type: string;
  name: string;
  photo: string;
  about: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
  phoneNumber: string;
  isAuthenticated?: boolean;
}
