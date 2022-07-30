import styled from "styled-components";
import { Body } from "ui/texts";

export const StyledFooter = styled.footer`
  height: 648px;
  background-color: #000;
  color: #fff;
  padding: 60px 30px;
  @media (min-width: 769px) {
    height: 408px;
  }
`;

export const Li = styled(Body).attrs({
  as: "li",
})`
  list-style: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  gap: 20px;
`;
