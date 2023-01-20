import { api } from "src/api/apiConfig";
import type { FormValues } from "src/pages/SignIn/types";

export const signIn = (userData: FormValues) =>
  api.post("auth/signIn", userData);
