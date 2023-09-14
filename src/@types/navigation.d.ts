import { SignedInParamList } from "../application/routes/signed-in/SignedInParamList";
import { SignedOffParamList } from "../application/routes/signed-off/SignedOffParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends SignedInParamList, SignedOffParamList {}
  }
}
