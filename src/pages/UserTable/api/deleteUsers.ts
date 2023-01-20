import { api } from "src/api/apiConfig";

export const deleteUsers = (idList: number[]) => api.put("/user", { idList });
