import { Navigate, Route, Routes } from "react-router";

import SignInContainer from "src/pages/SignIn/container/SignInContainer";
import SignUpContainer from "src/pages/SignUp/container/SignUpContainer";
import UserTableContainer from "src/pages/UserTable/container/UserTableContainer";
import PrivateRoutes from "src/router/PrivateRoute";

import { ROUTE_NAMES } from "src/router/routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTE_NAMES.SIGN_IN} replace />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />

      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.USER_TABLE} element={<UserTableContainer />} />
      </Route>
    </Routes>
  );
};

export default Router;
