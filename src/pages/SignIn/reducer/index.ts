import { createSlice } from "@reduxjs/toolkit";

import { authorization } from "src/pages/SignIn/thunks/authorization";
import { ApiError } from "src/types/AuthError";

interface SignInInitialState {
  error: ApiError;
  isLoading: boolean;
  isAuth: boolean;
}

const initialState: SignInInitialState = {
  error: null,
  isLoading: false,
  isAuth: false,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authorization.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authorization.fulfilled, (state, { payload }) => {
      state.isAuth = true;
      localStorage.setItem("token", payload.data);
      state.isLoading = false;
    });
    builder.addCase(authorization.rejected, (state, { payload }) => {
      let error = payload?.error;

      if (error instanceof Array) {
        error = error.join(", ");
      }

      state.error = error;
      state.isLoading = false;
    });
  },
});

export const { cleanUp } = signInSlice.actions;

export default signInSlice.reducer;
