import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-direction: row;
  align-itens: center;
  grid-gap: 18px;
`;

export const Button = styled.button<{ $confirm?: boolean; $disable?: boolean }>`
  padding: 10px 20px;
  border: none;
  display: flex;
  align-itens: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  background-color: ${({ $confirm, $disable }) =>
    $confirm ? ($disable ? "#ccc" : "#d4edda") : "#f8d7da"};
  color: white;

  & svg {
    height: 26px;
    fill: ${({ $confirm, $disable }) =>
      $confirm ? ($disable ? "grey" : "#28a745") : "#dc3545"};
  }

  &:hover {
    background-color: ${({ $confirm, $disable }) =>
      $confirm ? ($disable ? "#ccc" : "#c3e6cb") : "#f5c6cb"};
  }
`;
