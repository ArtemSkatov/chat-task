import { MyButton } from "@/shared/ui/MyButton/MyButton";
import { MyInput } from "@/shared/ui/MyInput/MyInput";
import { Title } from "@/shared/ui/Titlle/Title";
import { useForm } from "react-hook-form";

type formProps = {
  login: string;
  password: string;
  repeatPassword: string;
};

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submitForm = () => {};

  return (
    <div className="border-2 p-10 rounded-xl max-w-96 w-full">
      <Title className="pb-8 text-center">Регистрация</Title>
      <form
        className=" flex flex-col gap-4"
        onSubmit={() => handleSubmit(submitForm)}
      >
        <MyInput name={"login"} placeholder="Login" register={register} />
        <MyInput
          name={"password"}
          placeholder="Password"
          type="password"
          register={register}
        />
        <MyInput
          name="repeatPassword"
          placeholder="Repeat password"
          type="password"
          register={register}
        />
        <MyButton>Registration</MyButton>
      </form>
    </div>
  );
};
