import styled from "styled-components";

// Container geral do header
export const CategoryContainer = styled.section`
  background-color: white;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
export const CategoryWrapper = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 26px;
  padding: 5px 10px;
  max-width: 300px;
  width: 100%;
  margin-right: 26px;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  flex: 1;
  border-radius: 25px;
  background-color: white;
  color: black;
  padding: 10px;
  width: 100%;
  cursor: pointer;
`;

interface ISearchButton {
  $disabled: boolean;
}

export const SearchButton = styled.button<ISearchButton>`
  background: lightblue;
  border: 2px solid #ccc;
  border-radius: 26px;
  cursor: pointer;
  font-size: 18px;
  padding: 5px 10px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => (props.$disabled ? "lightblue" : "#4da3d4")};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 10px;
`;
