import styled, { keyframes } from "styled-components";

const preloaderRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.colors.lightGrey};
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const PreloaderCircle = styled.div`
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-bottom: 2px solid ${(props) => props.theme.colors.green};
  animation: ${preloaderRotate} 2s infinite linear;
`;
