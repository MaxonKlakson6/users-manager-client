import { BlockRequest } from "src/pages/UserTable/types/apiTypes";
import { api } from "src/api/apiConfig";

export const toggleUsersBlock = (payload: BlockRequest) =>
  api.patch("/user", payload);
