import { AuthFormValues } from "src/types/AuthForm";

export type FormValues = Omit<AuthFormValues, "name">;

export interface SignInResponse {
  data: string;
}
