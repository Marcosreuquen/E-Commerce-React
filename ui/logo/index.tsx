import { Title } from "ui/texts";
import { Container } from "./styled";
import { Cart } from "ui/icons";
import Link from "next/link";

export const LogoCart = (props: any) => {
  return (
    <Link passHref href='/'>
      <Container>
        <Cart color={props?.color} />
        <Title style={{ margin: 0 }}>Compralo</Title>
      </Container>
    </Link>
  );
};
