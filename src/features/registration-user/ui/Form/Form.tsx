import { MyButton } from "@/shared/ui/MyButton/MyButton";
import { MyInput } from "@/shared/ui/MyInput/MyInput";
import { Title } from "@/shared/ui/Titlle/Title";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { submitFormRegistration } from "../../api/submitFormRegistration";
import { User } from "@/entities/user/types/user";

type formProps = {
  repeatPassword: string;
} & User;

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<formProps>();

  const { mutate } = useMutation({
    mutationFn: (formData: User) => submitFormRegistration(formData),
  });
  const submitForm = (data: formProps) => {
    mutate(
      { username: data.username, password: data.password },
      {
        onSuccess: (response) => console.log(response),
      }
    );
  };

  console.log(errors, "errors");

  return (
    <div className="border-2 p-10 rounded-xl max-w-96 w-full">
      <Title className="pb-8 text-center">Регистрация</Title>
      <form
        className=" flex flex-col gap-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <MyInput
          name={"username"}
          placeholder="Login"
          register={register}
          settings={{
            required: "Обязательно к заполнению",
          }}
          error={errors?.username?.message || undefined}
        />
        <MyInput
          name={"password"}
          placeholder="Password"
          type="password"
          register={register}
          settings={{
            required: "Обязательно к заполнению",
          }}
          error={errors?.password?.message || undefined}
        />
        <MyInput
          name="repeatPassword"
          placeholder="Repeat password"
          type="password"
          register={register}
          settings={{
            required: "Обязательно к заполнению",
            validate: {
              repeat: (val) =>
                val === getValues("password") ? true : "Пароли не совпадают",
            },
          }}
          error={errors?.repeatPassword?.message || undefined}
        />
        <MyButton>Registration</MyButton>
      </form>
    </div>
  );
};
