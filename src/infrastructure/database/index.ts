import Realm from "realm";
import { schema } from "./schemas";

export const getRealm = async () =>
  await Realm.open({ schema, path: "busca_adv" });
