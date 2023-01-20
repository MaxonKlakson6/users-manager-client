import { Link } from "react-router-dom";

import Button from "src/components/Button";
import LoadingComponent from "src/components/LoadingComponent";
import Input from "src/components/Input";

import { ROUTE_NAMES } from "src/router/routeNames";
import type { AuthFormValues } from "src/types/AuthForm";
import type { AuthProps } from "src/types/AuthProps";

import stylesClasses from "src/static/styles/authClasses.module.scss";

type SignUpFormProps = Omit<AuthProps<AuthFormValues>, "error">;

const SignUpForm = ({
  form,
  isLoading,
  handleChangeForm,
  handleSubmit,
}: SignUpFormProps) => {
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
      <Input
        type="text"
        placeholder="Name"
        className={stylesClasses.input}
        name="name"
        value={form.name}
        onChange={handleChangeForm}
      />
      <Button type="submit" variant="contained">
        Create an account
      </Button>

      <Link to={ROUTE_NAMES.SIGN_IN} className={stylesClasses.link}>
        Go to sign in page
      </Link>
      {isLoading && <LoadingComponent />}
    </form>
  );
};

export default SignUpForm;
