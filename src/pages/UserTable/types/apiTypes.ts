import { User } from "src/pages/UserTable/types/user";
import { ApiError } from "src/types/AuthError";

export interface UpdateResponse {
  updatedUserList: User[];
}

export interface GetUserResponse {
  usersList: User[];
}

export interface BlockRequest {
  idList: number[];
  isBlocked: boolean;
}

export type DeleteRequest = number[];

export interface ThunkError {
  rejectValue: { error: ApiError } | undefined;
}
