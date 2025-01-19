import { Login } from "@/pages/Login/Login";
import { Registration } from "@/pages/Registration/Registration";
import { Layout } from "@/shared/ui/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router";

export const WithRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/registration"} element={<Registration />} />
          <Route path={"/login"} element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
