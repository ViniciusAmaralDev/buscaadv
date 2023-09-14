import { SignedOffParamList } from "./SignedOffParamList";
import { StackScreenProps } from "@react-navigation/stack";

export type SignedOffRootProps<T extends keyof SignedOffParamList> =
  StackScreenProps<SignedOffParamList, T>;
