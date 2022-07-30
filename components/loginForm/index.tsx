import { FormFlex } from "components/searchBox/styled";
import { useMe, useTokenValue } from "hooks";
import { apiCalls } from "lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Button } from "ui/button";
import { Label } from "ui/textfield";
import { TinyText, Title } from "ui/texts";

export const LoginForm = () => {
  const [me, setMe, login, logout] = useMe();
  const router = useRouter();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      email: null,
      code: null,
    },
  });
  const [showCode, setShowCode] = useState(false);

  const handleSubmitMail = async (e: any) => {
    if (e.email) {
      apiCalls.auth.post(e.email);
      setShowCode(true);
    }
  };
  const handleSendCode = async (e: any) => {
    const { email, code } = e;
    const isSuccess = await login(email, parseInt(code));
    if (isSuccess) {
      Swal.fire({ title: "Welcome", icon: "success" });
      router.replace("/profile");
    }
    if (!isSuccess) {
      Swal.fire({
        title: "Something fail",
        icon: "error",
        text: "Please, try again later.",
      });
    }
  };

  return (
    <section
      style={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Title>Ingresar</Title>
      {!showCode ? (
        <FormFlex
          column
          style={{ alignItems: "flex-start" }}
          onSubmit={handleSubmit((data) => handleSubmitMail(data))}>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Label style={{ width: 333 }} placeholder='Email' {...field} />
            )}
          />
          <Button secondary style={{ width: 333 }}>
            Continuar
          </Button>
        </FormFlex>
      ) : (
        <FormFlex
          column
          style={{ alignItems: "flex-start" }}
          onSubmit={handleSubmit((data) => handleSendCode(data))}>
          <Controller
            name='code'
            control={control}
            render={({ field }) => (
              <Label
                style={{ width: 333, textAlign: "center" }}
                placeholder='12345'
                {...field}
              />
            )}
          />
          <TinyText>Te envíamos un código a tu mail</TinyText>
          <Button secondary style={{ width: 333 }}>
            Ingresar
          </Button>
        </FormFlex>
      )}
    </section>
  );
};
