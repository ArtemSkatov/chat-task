import classNames from "classnames";
import { ReactNode } from "react";

export const Title = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={classNames("text-2xl font-medium", className)}>
      {children}
    </h1>
  );
};
