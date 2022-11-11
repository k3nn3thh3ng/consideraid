import axios from "axios";
import config from "../config";

export const backendApi = axios.create({
	baseURL: `${config.api.backend}/api`
});
