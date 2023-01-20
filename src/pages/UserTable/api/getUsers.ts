import { api } from "src/api/apiConfig";

export const getUsers = () => api.get("user");
