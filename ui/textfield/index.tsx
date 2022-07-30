import styled from "styled-components";
import { TinyText } from "ui/texts";

export const Input = styled.input`
  width: 163px;
  height: 37px;
  background-color: transparent;
  border: ${(props: { dark?: boolean }) =>
    props.dark ? "3px solid #FFF" : "3px solid #000"};
  color: ${(props: { dark?: boolean }) => (props.dark ? "#FFF" : "#000")};
  border-radius: 8px;
  font-family: "Inter", -apple-system, Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  padding: 4px;
  &::placeholder {
    opacity: 0.8;
  }
`;
export const StyledLabel = styled.label`
  width: 163px;
`;

export const Label = (props: any) => {
  return (
    <StyledLabel>
      <TinyText>{props.name}</TinyText>
      <Input {...props} />
    </StyledLabel>
  );
};
