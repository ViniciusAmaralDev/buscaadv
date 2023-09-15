import { ERequestStatus } from "../enums/ERequestStatus";

export interface IRequestStatusContext {
  isLoading: boolean;
  setRequestStatus: React.Dispatch<React.SetStateAction<ERequestStatus>>;
}
