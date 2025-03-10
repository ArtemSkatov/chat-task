import { ROUTES } from "@/shared/api/routes";
import { RootState } from "@/shared/types/rootState";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { useGetInfoMe } from "../hooks/useGetInfoMe";

export const Layout = () => {
  useGetInfoMe();

  const token = useSelector((state: RootState) => state.user.token);
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  return isAuth ? (
    <Outlet />
  ) : token ? (
    <div className="flex items-center content-center w-dvw h-dvh">loader</div>
  ) : (
    <Navigate to={ROUTES.login} />
  );
};
