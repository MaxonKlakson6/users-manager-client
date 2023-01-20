import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { signIn } from "src/pages/SignIn/api/signIn";
import type { FormValues, SignInResponse } from "src/pages/SignIn/types";
import type { AuthError } from "src/types/AuthError";

export const authorization = createAsyncThunk<
  SignInResponse,
  FormValues,
  { rejectValue: AuthError | undefined }
>("signIn/authorization", async (userData, { rejectWithValue }) => {
  try {
    const response = await signIn(userData);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<AuthError>;
    return rejectWithValue(axiosError.response?.data);
  }
});
