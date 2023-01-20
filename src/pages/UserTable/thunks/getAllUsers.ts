import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { getUsers } from "src/pages/UserTable/api/getUsers";
import type { ApiError } from "src/types/AuthError";
import type {
  GetUserResponse,
  ThunkError,
} from "src/pages/UserTable/types/apiTypes";

export const getAllUsers = createAsyncThunk<
  GetUserResponse,
  undefined,
  ThunkError
>("userTable/getUsers", async (_, { rejectWithValue }) => {
  try {
    const usersList = await getUsers();

    return usersList.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ error: ApiError }>;
    return rejectWithValue(axiosError.response?.data);
  }
});
