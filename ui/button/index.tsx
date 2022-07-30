import styled from "styled-components";

export const Button = styled.button`
  height: 37px;
  width: 163px;
  border-radius: 8px;
  background-color: ${(props: {
    primary?: boolean;
    secondary?: boolean;
    alt?: boolean;
  }) => (props.primary ? "#4F7CAC" : props.secondary ? "#FFC700" : "#E75A7C")};
  color: white;
  font-family: "Inter", -apple-system, Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #424242;
    transition: 0.5s;
  }
`;
