import { createSlice } from "@reduxjs/toolkit";

import { registration } from "src/pages/SignUp/thunks/registration";
import type { ApiError } from "src/types/AuthError";

interface SignUpInitialState {
  isLoading: boolean;
  error: ApiError;
  data: string;
}

const initialState: SignUpInitialState = {
  isLoading: false,
  error: null,
  data: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.error = null;
      state.data = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registration.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.isLoading = false;
    });

    builder.addCase(registration.rejected, (state, { payload }) => {
      let error = payload?.error;

      if (error instanceof Array) {
        error = error.join(", ");
      }

      state.error = error;
      state.isLoading = false;
    });
  },
});

export const { cleanUp } = signUpSlice.actions;
export default signUpSlice.reducer;
