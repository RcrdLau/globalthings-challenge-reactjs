import styled from "styled-components";

export const NewCategoryButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #d4edda;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  text-align: center;

  &:hover {
    background-color: #c3e6cb;
    transform: scale(1.00);
  }
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  fill: #155724;
`;
