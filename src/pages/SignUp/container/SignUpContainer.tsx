import { FormEvent, useEffect } from "react";

import SignUpLayout from "src/pages/SignUp/components/SignUpLayout";

import { useForm } from "src/hooks";
import { registration } from "src/pages/SignUp/thunks/registration";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { cleanUp } from "src/pages/SignUp/reducer";

import type { UseFormReturnValue } from "src/hooks/useForm";
import type { AuthFormValues } from "src/types/AuthForm";

const SignUpContainer = () => {
  const dispatch = useAppDispatch();
  const {
    data: successData,
    isLoading,
    error,
  } = useAppSelector((state) => state.signUp);

  const [signUpForm, handleChangeForm]: UseFormReturnValue<AuthFormValues> =
    useForm({
      email: "",
      password: "",
      name: "",
    });

  const handleCreateAccount = (event: FormEvent): void => {
    event.preventDefault();
    dispatch(registration(signUpForm));
  };

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
    };
  }, []);

  return (
    <SignUpLayout
      form={signUpForm}
      handleChangeForm={handleChangeForm}
      handleSubmit={handleCreateAccount}
      isLoading={isLoading}
      error={error}
      successData={successData}
    />
  );
};

export default SignUpContainer;
