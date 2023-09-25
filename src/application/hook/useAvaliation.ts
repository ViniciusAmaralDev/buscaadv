import { useContext } from "react";
import { AvaliationsContext } from "../context/AvaliationsContext";

export const useAvaliation = () => {
  const { avaliations } = useContext(AvaliationsContext);

  return { avaliations };
};
