import { BurgerMenu } from "ui/burgerMenu";
import { LogoCart } from "ui/logo";
import { Header } from "./styled";

export const HeaderLine = () => {
  return (
    <Header>
      <LogoCart color='#FFF' />
      <BurgerMenu />
    </Header>
  );
};
