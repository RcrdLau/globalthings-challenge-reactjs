import React from "react";
import {
  Overlay,
  ModalContainer,
  Title,
  ButtonsContainer,
  Button,
} from "./styles";
import { CancelIcon, ConfirmIcon } from "../../assets/icons/buttons";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const CategoriesModal: React.FC<ModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <Overlay>
      <ModalContainer>
        <Title>Do you really want to delete it?</Title>
        <ButtonsContainer>
          <Button $confirm onClick={onConfirm}>
            <ConfirmIcon />
          </Button>
          <Button onClick={onCancel}>
            <CancelIcon />
          </Button>
        </ButtonsContainer>
      </ModalContainer>
    </Overlay>
  );
};
