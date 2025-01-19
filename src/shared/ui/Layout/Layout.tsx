import classNames from "classnames";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className={classNames("min-h-dvh")}>
      <Outlet />
    </div>
  );
};
