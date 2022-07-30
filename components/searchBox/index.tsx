import { FormFlex } from "./styled";
import { Input } from "ui/textfield";
import { Button } from "ui/button";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";

export const SearchBox = (props: any) => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ search }: any) => {
    router.push({
      pathname: "/search",
      query: { q: search },
    });
  };

  return (
    <FormFlex {...props} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='search'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input placeholder='Buscar' {...field} dark={props.dark} />
        )}
      />
      <Button {...props}>Buscar</Button>
    </FormFlex>
  );
};
