import SnackBar from "src/components/SnackBar";
import SignInForm from "src/pages/SignIn/components/SignInForm";

import { useAppDispatch } from "src/hooks/reduxHooks";
import { cleanUp } from "src/pages/SignIn/reducer";

import type { AuthProps } from "src/types/AuthProps";
import type { FormValues } from "src/pages/SignIn/types";
import { MESSAGES } from "src/constants/alertMessages";

import stylesClasses from "src/static/styles/authClasses.module.scss";

interface SignInLayoutProps extends AuthProps<FormValues> {
  isAuth: boolean;
}
const SignInLayout = ({
  form,
  error,
  isAuth,
  isLoading,
  handleChangeForm,
  handleSubmit,
}: SignInLayoutProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const handleAlertClose = () => {
    dispatch(cleanUp());
  };

  return (
    <div className={stylesClasses.wrapper}>
      <SignInForm
        form={form}
        handleChangeForm={handleChangeForm}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {error && (
        <SnackBar
          message={error}
          severity="error"
          duration={3000}
          position={{ vertical: "top", horizontal: "center" }}
          onClose={handleAlertClose}
        />
      )}
      {isAuth && (
        <SnackBar
          message={MESSAGES.WELCOME}
          severity="success"
          duration={2000}
          position={{ vertical: "top", horizontal: "center" }}
        />
      )}
    </div>
  );
};

export default SignInLayout;
