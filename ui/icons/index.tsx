import styled from "styled-components";
import Logo from "./logo-cart.svg";
import Burger from "./Burguer.svg";

export const Cart = styled(Logo)`
  width: 46px;
  height: 46px;
  & > g {
    fill: ${(props: any) => props.color};
  }
`;

export const BurgerIcon = () => <Burger />;
