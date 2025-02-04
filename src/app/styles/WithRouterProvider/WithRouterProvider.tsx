import { Authorization } from "@/features/authorization";
import { NotAuthLayout } from "@/features/authorization/ui/NotAuthLayout";
import { Login } from "@/pages/Login/Login";
import { Registration } from "@/pages/Registration/Registration";
import { ROUTES } from "@/shared/api/routes";
import { Layout } from "@/shared/ui/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router";

export const WithRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Authorization />}>
            <Route path={ROUTES.home} element />
          </Route>
          <Route element={<NotAuthLayout />}>
            <Route path={ROUTES.registration} element={<Registration />} />
            <Route path={ROUTES.login} element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
