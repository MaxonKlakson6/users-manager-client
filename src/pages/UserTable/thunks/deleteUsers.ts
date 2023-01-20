import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { deleteUsers as deleteUsersRequest } from "src/pages/UserTable/api/deleteUsers";
import { changeStatusMessage } from "src/pages/UserTable/reducer";
import {
  DeleteRequest,
  ThunkError,
  UpdateResponse,
} from "src/pages/UserTable/types/apiTypes";
import { ApiError } from "src/types/AuthError";
import { MESSAGES } from "src/constants/alertMessages";

export const deleteUsers = createAsyncThunk<
  UpdateResponse,
  DeleteRequest,
  ThunkError
>("userTable/deleteUsers", async (idList, { rejectWithValue, dispatch }) => {
  try {
    const updatedUsersList = await deleteUsersRequest(idList);

    dispatch(changeStatusMessage(MESSAGES.DELETE));

    return updatedUsersList.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: ApiError }>;
    return rejectWithValue(axiosError.response?.data);
  }
});
