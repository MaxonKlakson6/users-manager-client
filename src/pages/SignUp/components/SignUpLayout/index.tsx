import SnackBar from "src/components/SnackBar";
import SignUpForm from "src/pages/SignUp/components/SignUpForm";

import { useAppDispatch } from "src/hooks/reduxHooks";
import { cleanUp } from "src/pages/SignUp/reducer";
import type { AuthFormValues } from "src/types/AuthForm";
import type { AuthProps } from "src/types/AuthProps";

import stylesClasses from "src/static/styles/authClasses.module.scss";

interface SignUpLayoutProps extends AuthProps<AuthFormValues> {
  successData: string;
}
const SignUpLayout = ({
  form,
  isLoading,
  error,
  successData,
  handleChangeForm,
  handleSubmit,
}: SignUpLayoutProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleAlertClose = () => {
    dispatch(cleanUp());
  };

  return (
    <div className={stylesClasses.wrapper}>
      <SignUpForm
        form={form}
        isLoading={isLoading}
        handleChangeForm={handleChangeForm}
        handleSubmit={handleSubmit}
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
      {successData && (
        <SnackBar
          message={successData}
          severity="success"
          duration={2000}
          position={{ vertical: "top", horizontal: "center" }}
          onClose={handleAlertClose}
        />
      )}
    </div>
  );
};

export default SignUpLayout;
