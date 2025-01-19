import classNames from "classnames";
import {
  FieldValues,
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
  error?: string;
  register?: UseFormRegister<TFieldValues>;
  name?: Path<TFieldValues>;
  settings?: RegisterOptions<TFieldValues>;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={classNames(classNameWrap)}>
      <input
        className={classNames(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
        {...propsInput}
        {...(register && name && register(name, settings))}
      />
      {error && <span className="text-red-600">{error}</span>}
    </label>
  );
};
