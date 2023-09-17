import axios from "axios";
import { GEOCODE_API_URL } from "@env";

export const api = axios.create({
  baseURL: GEOCODE_API_URL,
});
