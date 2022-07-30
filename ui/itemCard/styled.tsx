import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Card = styled.div`
  height: 100%;
  width: 100%;
  min-height: 384px;
  display: grid;
  grid-template-rows: 60% 40%;
  grid-template-columns: 100%;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
  padding: 20px;
  gap: 12px;
  @media (min-width: 769px) {
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 60% 40%;
  }
  & > img {
    z-index: 5 !important;
  }
`;
