import { MyButton } from "@/shared/ui/MyButton/MyButton";

export const Test = () => {
  const ping = async () => {
    const response = await fetch("http://localhost:8080/test");

    console.log(await response.json());
  };
  return (
    <div>
      Test
      <MyButton onClick={ping}>ping</MyButton>
    </div>
  );
};
