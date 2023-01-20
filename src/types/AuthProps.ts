import type { ChangeEvent, FormEvent } from "react";
import type { ApiError } from "src/types/AuthError";

export interface AuthProps<FormValues> {
  form: FormValues;
  error: ApiError;
  isLoading: boolean;
  handleChangeForm: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
}
