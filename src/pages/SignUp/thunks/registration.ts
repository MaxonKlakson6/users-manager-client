import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { signUp } from "src/pages/SignUp/api/signUp";

import type { SignUpResponse } from "src/pages/SignUp/types";
import type { AuthFormValues } from "src/types/AuthForm";
import type { AuthError } from "src/types/AuthError";

export const registration = createAsyncThunk<
  SignUpResponse,
  AuthFormValues,
  { rejectValue: AuthError | undefined }
>("signUp/registration", async (userData, { rejectWithValue }) => {
  try {
    const response = await signUp(userData);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<AuthError>;
    return rejectWithValue(axiosError.response?.data);
  }
});
