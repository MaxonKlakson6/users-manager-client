import { Link } from "react-router-dom";

import Input from "src/components/Input";
import Button from "src/components/Button";
import LoadingComponent from "src/components/LoadingComponent";

import { ROUTE_NAMES } from "src/router/routeNames";
import type { FormValues } from "src/pages/SignIn/types";
import type { AuthProps } from "src/types/AuthProps";

import stylesClasses from "src/static/styles/authClasses.module.scss";

type SignInFormProps = Omit<AuthProps<FormValues>, "error">;

const SignInForm = ({
  form,
  isLoading,
  handleChangeForm,
  handleSubmit,
}: SignInFormProps) => {
  return (
    <form className={stylesClasses.signUpForm} onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        className={stylesClasses.input}
        name="email"
        value={form.email}
        onChange={handleChangeForm}
      />
      <Input
        type="password"
        placeholder="Password"
        className={stylesClasses.input}
        name="password"
        value={form.password}
        onChange={handleChangeForm}
      />
      <Button type="submit" variant="contained">
        Sign in
      </Button>

      <Link to={ROUTE_NAMES.SIGN_UP} className={stylesClasses.link}>
        Go to sign up page
      </Link>
      {isLoading && <LoadingComponent />}
    </form>
  );
};

export default SignInForm;
