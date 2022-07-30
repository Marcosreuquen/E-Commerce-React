import styled from "styled-components";

const Close = (props: any) => (
  <svg
    version='1.1'
    id='Capa_1'
    x='0px'
    y='0px'
    // width="357px"
    // height="357px"
    viewBox='0 0 357 357'
    {...props}>
    <g>
      <g id='close'>
        <polygon
          fill='#000'
          points='357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
              214.2,178.5'
        />
      </g>
    </g>
  </svg>
);

export const Bg = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: var(--negro1);
  width: 100%;
  margin: 0 20px;
  &.transparent {
    background-color: transparent;
  }
`;
export const ModalBody = styled.div`
  overflow: auto;
  height: 100%;
`;

export const CloseButton = styled(Close)`
  width: 30px;
  height: 30px;
  right: 20px;
  top: 20px;
  position: absolute;
  cursor: pointer;
  * {
    fill: white;
  }
`;
