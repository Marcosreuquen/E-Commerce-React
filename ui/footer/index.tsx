import Link from "next/link";
import { Body, LargeText } from "ui/texts";
import { Container, Li, StyledFooter, Ul } from "./styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Ul>
          <Link href='/signin' passHref>
            <Li>Ingresar</Li>
          </Link>
          <Link href='/profile' passHref>
            <Li>Mi perfil</Li>
          </Link>
          <Link href='/search' passHref>
            <Li>Buscar</Li>
          </Link>
          <Link href='/logout' passHref>
            <Li>Logout</Li>
          </Link>
        </Ul>
        <div>
          <LargeText bold>Redes</LargeText>
          <Link href='' passHref>
            <Body>My E-Commerce</Body>
          </Link>
          <Link href='' passHref>
            <Body>My E-Commerce</Body>
          </Link>
        </div>
      </Container>
      <Body>
        ©{new Date(Date.now()).getFullYear().toString()} - My E-Commerce
      </Body>
    </StyledFooter>
  );
};
