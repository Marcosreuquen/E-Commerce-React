import styled from "styled-components";

export const FormFlex = styled.form`
  background-color: ${({ dark }: any) => (dark ? "#000" : "transparent")};
  display: flex;
  flex-direction: ${({ column }: any) => (column ? "column" : "row")};
  align-items: center;
  justify-content: center;
  flex-wrap: ${(props: { wrap?: boolean }) => (props.wrap ? "wrap" : null)};
  gap: 18px;
  padding: 25px;
`;
