import { useContext } from "react";
import { StorageContext } from "../context/StorageContext";

export const useStorage = () => {
  const { users } = useContext(StorageContext);

  return { users };
};
