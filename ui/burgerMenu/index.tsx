import Link from "next/link";
import { useState } from "react";
import { BurgerIcon } from "ui/icons";
import ModalComponent from "ui/modal";
import { Title } from "ui/texts";
import { Container } from "./styled";

export const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleBurgerClick = (e: any) => setShowMenu(!showMenu);

  return (
    <div onClick={handleBurgerClick}>
      <BurgerIcon />
      <ModalComponent show={showMenu} onClose={setShowMenu}>
        <Container>
          <Link href='/signin' passHref>
            <Title>Ingresar</Title>
          </Link>
          <Link href='/profile' passHref>
            <Title>Mi perfil</Title>
          </Link>
          <Link href='/search' passHref>
            <Title>Buscar</Title>
          </Link>
        </Container>
      </ModalComponent>
    </div>
  );
};
