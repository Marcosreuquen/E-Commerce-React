import styled from "styled-components";

export const Container = styled.div`
  /* width: 200px; */
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 9px;
  flex-wrap: wrap;
  & > h1 {
    @media (max-width: 769px) {
      display: none;
    }
  }
`;
