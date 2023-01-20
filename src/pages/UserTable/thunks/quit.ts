import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/api/apiConfig";

export const quit = createAsyncThunk("userTable/quit", async () => {
  await api.patch("auth/quit");
});
