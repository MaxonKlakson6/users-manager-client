import { api } from "src/api/apiConfig";

import type { AuthFormValues } from "src/types/AuthForm";

export const signUp = (userData: AuthFormValues) =>
  api.post("auth/signUp", userData);
