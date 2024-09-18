import React, { useState } from "react";

import { CancelIcon, ConfirmIcon } from "../../assets/icons/buttons";
import {
  Button,
  ButtonsContainer,
  ModalContainer,
  Overlay,
  Title,
} from "../CategoriesModal/styles";
import { CategoryRegisterForm } from "./styles";
import { CardInput } from "../CategoriesCard/styles";
import { RegisterCategoryAPI } from "./utils";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const CategoriesRegisterModal: React.FC<ModalProps> = ({ onCancel }) => {
  const dispatch = useAppDispatch();
  const [nameValue, setNameValue] = useState<string>("");

  return (
    <Overlay>
      <ModalContainer>
        <Title>Register New Category</Title>
        <CategoryRegisterForm>
          <CardInput
            type="text"
            id="input-field"
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
            placeholder="Type a category"
          />
        </CategoryRegisterForm>
        <ButtonsContainer>
          <Button
            disabled={nameValue === "" || nameValue.length < 3}
            $confirm
            $disable={nameValue === "" || nameValue.length < 3}
            onClick={() => {
              RegisterCategoryAPI(nameValue, onCancel, dispatch);
            }}
          >
            <ConfirmIcon />
          </Button>
          <Button onClick={() => onCancel()}>
            <CancelIcon />
          </Button>
        </ButtonsContainer>
      </ModalContainer>
    </Overlay>
  );
};
