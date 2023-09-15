import { SignedInParamList } from "./SignedInParamList";
import { StackScreenProps } from "@react-navigation/stack";

export type SignedInRootProps<T extends keyof SignedInParamList> =
  StackScreenProps<SignedInParamList, T>;
