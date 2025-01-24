import { User } from "@/entities/user/types/user";
import { MyButton } from "@/shared/ui/MyButton/MyButton";
import { MyInput } from "@/shared/ui/MyInput/MyInput";
import { Title } from "@/shared/ui/Titlle/Title";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { submitFormLogin } from "../../api/submitFormLogin";
import { ROUTES } from "@/shared/api/routes";
import { Link } from "react-router";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>();

  const { mutate } = useMutation({
    mutationFn: (formData: User) => submitFormLogin(formData),
  });

  const submitForm = (data: User) => {
    mutate(data, {
      onSuccess: (response) => console.log(response),
      onError: (error) => console.log(error, "error"),
    });
  };

  return (
    <div className="border-2 p-10 rounded-xl max-w-96 w-full">
      <Title className="pb-8 text-center">Вход</Title>
      <form
        className=" flex flex-col gap-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <MyInput
          name={"username"}
          placeholder="Username"
          register={register}
          error={errors?.password?.message}
        />
        <MyInput
          name={"password"}
          placeholder="Password"
          type="password"
          register={register}
          error={errors?.password?.message}
        />
        <MyButton>Login</MyButton>
      </form>

      <Link className="mx-auto block text-center mt-4" to={ROUTES.registration}>
        Registration
      </Link>
    </div>
  );
};
