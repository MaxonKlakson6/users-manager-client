import { useEffect } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router";

import SignInLayout from "src/pages/SignIn/components/SignInLayout";

import { useForm } from "src/hooks";
import { useAppDispatch, useAppSelector } from "src/hooks/reduxHooks";
import { authorization } from "src/pages/SignIn/thunks/authorization";

import type { UseFormReturnValue } from "src/hooks/useForm";
import type { FormValues } from "src/pages/SignIn/types";
import { ROUTE_NAMES } from "src/router/routeNames";

const SignInContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, isAuth } = useAppSelector((state) => state.signIn);
  const navigate = useNavigate();

  const [signInForm, handleChangeForm]: UseFormReturnValue<FormValues> =
    useForm({
      email: "",
      password: "",
    });

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    dispatch(authorization(signInForm));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate(ROUTE_NAMES.USER_TABLE);
    }
  }, []);

  useEffect(() => {
    let timeout: number | undefined;
    if (isAuth) {
      timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.USER_TABLE);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isAuth]);

  return (
    <SignInLayout
      form={signInForm}
      error={error}
      isLoading={isLoading}
      isAuth={isAuth}
      handleChangeForm={handleChangeForm}
      handleSubmit={handleSignIn}
    />
  );
};

export default SignInContainer;
