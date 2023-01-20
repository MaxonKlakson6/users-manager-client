import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getAllUsers } from "src/pages/UserTable/thunks/getAllUsers";
import { toggleBlockUsers } from "src/pages/UserTable/thunks/toggleBlockUsers";
import { quit } from "src/pages/UserTable/thunks/quit";
import { deleteUsers } from "src/pages/UserTable/thunks/deleteUsers";
import { normalizeCreatedAtField } from "src/helpers/normalizeCreatedAtField";

import type { User } from "src/pages/UserTable/types/user";
import type { ApiError } from "src/types/AuthError";

interface UserTableInitialState {
  usersList: User[];
  error: ApiError;
  isLoading: boolean;
  statusMessage: string;
}

const initialState: UserTableInitialState = {
  usersList: [],
  error: null,
  isLoading: false,
  statusMessage: "",
};

const userTableSlice = createSlice({
  name: "userTable",
  initialState,
  reducers: {
    changeStatusMessage: (state, { payload }: PayloadAction<string>) => {
      state.statusMessage = payload;
    },
    cleanUp: (state) => {
      state.statusMessage = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.usersList = normalizeCreatedAtField(payload.usersList);
    });
    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.error;
    });

    builder.addCase(toggleBlockUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleBlockUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.usersList = normalizeCreatedAtField(payload.updatedUserList);
    });
    builder.addCase(toggleBlockUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.error;
    });

    builder.addCase(deleteUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.usersList = normalizeCreatedAtField(payload.updatedUserList);
    });
    builder.addCase(deleteUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload?.error;
    });

    builder.addCase(quit.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(quit.fulfilled, (state) => {
      state.isLoading = false;
      localStorage.clear();
      window.location.reload();
    });
  },
});

export const { cleanUp, changeStatusMessage } = userTableSlice.actions;

export default userTableSlice.reducer;
