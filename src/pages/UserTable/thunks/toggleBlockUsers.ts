import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios/index";

import { toggleUsersBlock } from "src/pages/UserTable/api/toggleUsersBlock";
import { changeStatusMessage } from "src/pages/UserTable/reducer";
import type { ApiError } from "src/types/AuthError";
import type {
  BlockRequest,
  ThunkError,
  UpdateResponse,
} from "src/pages/UserTable/types/apiTypes";
import { MESSAGES } from "src/constants/alertMessages";

export const toggleBlockUsers = createAsyncThunk<
  UpdateResponse,
  BlockRequest,
  ThunkError
>(
  "userTable/toggleBlockUsers",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await toggleUsersBlock(payload);
      const statusMessage = payload.isBlocked
        ? MESSAGES.BLOCK
        : MESSAGES.UNBLOCK;

      dispatch(changeStatusMessage(statusMessage));

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ error: ApiError }>;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);
