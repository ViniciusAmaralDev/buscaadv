import axios from "axios";
import { VIACEP_API_URL } from "@env";

export const api = axios.create({
  baseURL: VIACEP_API_URL,
});
