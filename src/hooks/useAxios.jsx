import axios from "axios";
import { ROUTES_API } from "./useEnv";

export const useAxios = () => axios.create({baseURL:ROUTES_API });