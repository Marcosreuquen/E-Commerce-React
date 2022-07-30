import styled from "styled-components";
import { ViewHeight } from "ui/sections";

export const Container = styled(ViewHeight)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductsContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 50px 0;
`;
