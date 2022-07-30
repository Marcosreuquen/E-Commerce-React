import { ViewHeight } from "ui/sections";
import { Title } from "ui/texts";
import { FormFlex } from "components/searchBox/styled";
import { Label } from "ui/textfield";
import { Button } from "ui/button";
import { useTokenValue, useUserData } from "hooks";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useState } from "react";

export const ProfileForm = () => {
  const [me, setMe] = useUserData();
  const token = useTokenValue();
  const router = useRouter();

  useState(() => {
    if (!token) router.replace("/signin");
  });
  const { register, handleSubmit, control } = useForm({
    defaultValues: me,
  });

  const handleUpdate = async (e: any) => {
    const response = await setMe(e);
    if (response) {
      Swal.fire({ title: "Profile updated!", icon: "success" });
    }
    if (!response) {
      Swal.fire({
        title: "Something fail",
        icon: "error",
        text: "Please, try again later.",
      });
    }
  };

  return (
    <ViewHeight
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Title>Perfil</Title>
      <FormFlex
        column
        style={{ alignItems: "flex-start" }}
        onSubmit={handleSubmit((data) => handleUpdate(data))}>
        <Controller
          name='name'
          control={control}
          defaultValue={me.name}
          render={({ field }) => (
            <Label
              style={{ width: 333, textAlign: "center" }}
              placeholder='John Doe'
              {...field}
            />
          )}
        />
        <Controller
          name='Address'
          control={control}
          defaultValue={me.address}
          render={({ field }) => (
            <Label
              style={{ width: 333, textAlign: "center" }}
              placeholder='Evergreen 123, Springfield'
              {...field}
            />
          )}
        />
        <Controller
          name='Phone'
          control={control}
          defaultValue={me.tel}
          render={({ field }) => (
            <Label
              style={{ width: 333, textAlign: "center" }}
              placeholder='123456789'
              {...field}
            />
          )}
        />
        <Button secondary style={{ width: 333 }}>
          Guardar
        </Button>
      </FormFlex>
    </ViewHeight>
  );
};
