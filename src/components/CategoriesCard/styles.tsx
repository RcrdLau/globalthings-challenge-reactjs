import styled from "styled-components";

export const CardText = styled.p`
  font-family: Arial, sans-serif;
  color: #333;
  font-size: 18px;
  text-align: left;
  flex-grow: 1;
  flex: 1;
  min-width: 220px;
`;

export const CardInput = styled.input`
  font-family: Arial, sans-serif;
  color: #333;
  font-size: 18px;
  background-color: transparent;
  border: none;
  min-width: 220px;
  &:focus {
    outline: none;
  }
`;

export const CardIndex = styled(CardText)`
  margin-right: 20px;
`;

export const CardContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 30px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  flex-direction: column;
  min-width: 100%;
`;

export const CardWrapper = styled.div`
  background-color: #fff;
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  grid-gap: 6px;
`;

interface ITextWrapper {
  $editing: boolean;
}

export const TextWrapper = styled.div<ITextWrapper>`
  background-color: ${(props) => (props.$editing ? "#d1ecf1" : "#fff")};
  border-radius: 26px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  height: auto;
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border: ${(props) =>
    props.$editing ? "1px solid #0c5460" : "1px solid #ccc"};
`;

export const IconButton = styled.div`
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: #333;
  }
`;

export const EditButton = styled(IconButton)`
  background-color: #d1ecf1; /* Fundo azul claro */
  svg {
    fill: #0c5460; /* Cor do ícone caneta */
  }

  &:hover {
    background-color: #c4e3ea;
  }
`;

export const DeleteButton = styled(IconButton)`
  background-color: #f8d7da; /* Fundo vermelho claro */
  svg {
    fill: #721c24; /* Cor do ícone lixeira */
  }

  &:hover {
    background-color: #f1c2c6;
  }
`;

export const ConfirmButton = styled(IconButton)`
  background-color: #d4edda; /* Fundo verde claro */
  svg {
    fill: #28a745; /* Cor do ícone de confirmação */
  }

  &:hover {
    background-color: #c3e6cb;
  }
`;

export const CancelButton = styled(IconButton)`
  background-color: #f8d7da; /* Fundo vermelho claro */
  svg {
    fill: #dc3545; /* Cor do ícone de cancelamento */
  }

  &:hover {
    background-color: #f5c6cb;
  }
`;
