import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Inter", -apple-system, Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
`;

export const Subtitle = styled(Title).attrs({
  as: "h2",
})`
  font-size: 32px;
`;

export const LargeText = styled(Title).attrs({
  as: "p",
})`
  font-size: 20px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : 400)};
`;

export const Body = styled(LargeText)`
  font-size: 16px;
`;

export const TinyText = styled(Title).attrs({
  as: "p",
})`
  font-size: 12px;
  font-weight: 400;
`;
