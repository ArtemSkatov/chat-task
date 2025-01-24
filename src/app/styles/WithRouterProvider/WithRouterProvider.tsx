import { Login } from "@/pages/Login/Login";
import { Registration } from "@/pages/Registration/Registration";
import { Test } from "@/pages/Test/Test";
import { ROUTES } from "@/shared/api/routes";
import { Layout } from "@/shared/ui/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router";

export const WithRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.registration} element={<Registration />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={"/test"} element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
