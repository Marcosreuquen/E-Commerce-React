import { useLogout, useUserData } from "hooks";
import { Button } from "ui/button";
import { Body, Subtitle } from "ui/texts";
import { Section } from "./styled";

export const Signout = () => {
  const [me, setMe] = useUserData();
  const logout = useLogout();

  return (
    <Section>
      <Subtitle>¿Querés Iniciar sesión con otra cuenta?</Subtitle>
      <Body>Ya iniciaste sesión como: {me.email}</Body>
      <Button onClick={logout}>Cerrar Sesión</Button>
    </Section>
  );
};
