import { ROUTES } from "@/shared/api/routes";
import { RootState } from "@/shared/types/rootState";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useProtectRedirectNotAuth = () => {
  const navigate = useNavigate();

  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  console.log(isAuth, "isAuth");

  useEffect(() => {
    if (isAuth) navigate(ROUTES.home);
  }, [isAuth, navigate]);
};