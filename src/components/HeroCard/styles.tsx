import styled from "styled-components";
import { CheckboxWrapper } from "../HeroesRegisterModal/styles";

export const HeroTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  & select {
    padding: 10px 0;
  }
`;

export const CheckboxHeroWrapper = styled(CheckboxWrapper)`
  grid-gap: 10px;
  padding: 0;
`;

interface ITextContainer {
  $editing: boolean;
  $active: boolean;
}

export const TextContainer = styled.div<ITextContainer>`
  background-color: ${(props) =>
    props.$editing ? "#d1ecf1" : props.$active ? "#d4edda" : "#f8d7da"};
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
