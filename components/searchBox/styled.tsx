import styled from "styled-components";

export const FormFlex = styled.form<{
  dark?: boolean;
  column?: boolean;
  wrap?: boolean;
}>`
  background-color: ${({ dark }) => (dark ? "#000" : "transparent")};
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: center;
  justify-content: center;
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : null)};
  gap: 18px;
  padding: 25px;
`;
