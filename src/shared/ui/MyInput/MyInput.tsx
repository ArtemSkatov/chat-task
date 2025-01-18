import classNames from "classnames";

export const MyInput = ({
  classNameWrap,
  className,
  error,
  ...propsInput
}: {
  classNameWrap?: string;
  className?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={classNames(classNameWrap)}>
      <input
        className={classNames(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
        {...propsInput}
      />
      {error && <span className="text-red-600">{error}</span>}
    </label>
  );
};
