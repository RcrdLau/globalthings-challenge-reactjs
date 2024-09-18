import styled from "styled-components";
import { CardInput } from "../CategoriesCard/styles";

export const CardCheckbox = styled.input.attrs({ type: "checkbox" })`
  accent-color: #333;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const CardSelect = styled.select`
  font-family: Arial, sans-serif;
  color: #333;
  font-size: 18px;
  background-color: transparent;
  border: none;
  min-width: 220px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 20px 0;
  align-self: flex-start;
  width: 100%;
  font-size: 18px;
  color: #333;
`;
