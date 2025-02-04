import { ROUTES } from "@/shared/api/routes";
import { RootState } from "@/shared/types/rootState";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const NotAuthLayout = () => {
  // useProtectRedirectNotAuth();
  const token = useSelector((state: RootState) => state.user.token);
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  return !isAuth && !token ? <Outlet /> : <Navigate to={ROUTES.home} />;
};
