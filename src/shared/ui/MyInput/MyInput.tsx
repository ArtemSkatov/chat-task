import classNames from "classnames";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
// import { FieldValues, UseFormRegister } from "react-hook-form";

export const MyInput = <TFieldValues extends FieldValues>({
  classNameWrap,
  className,
  error,
  register,
  name,
  settings,
  ...propsInput
}: {
  classNameWrap?: string;
  className?: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<TFieldValues>>
    | undefined;
  register?: UseFormRegister<TFieldValues>;
  name?: Path<TFieldValues>;
  settings?: RegisterOptions<TFieldValues>;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={classNames("relative", classNameWrap)}>
      <input
        className={classNames(
          "bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className,
          error
            ? "text-red-600 border-red-600"
            : "border-gray-300 focus:border-blue-500"
        )}
        {...propsInput}
        {...(register && name && register(name, settings))}
      />
      {error && typeof error === "string" && (
        <span className="text-red-600 text-xs absolute -bottom-4">{error}</span>
      )}
    </label>
  );
};
