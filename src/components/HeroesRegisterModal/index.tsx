import React, { useEffect, useState } from "react";
import { CancelIcon, ConfirmIcon } from "../../assets/icons/buttons";
import {
  Button,
  ButtonsContainer,
  ModalContainer,
  Overlay,
  Title,
} from "../CategoriesModal/styles";
import { CardInput } from "../CategoriesCard/styles";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { CategoryRegisterForm } from "../CategoriesRegisterModal/styles";
import { CardCheckbox, CardSelect, CheckboxWrapper } from "./styles";
import { ICategoryList, LoadCategoryData } from "../CategoriesBody/utils";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { RegisterCategoryAPI } from "../CategoriesRegisterModal/utils";
import { RegisterHeroesAPI } from "./utils";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const HeroesRegisterModal: React.FC<ModalProps> = ({ onCancel }) => {
  const dispatch = useAppDispatch();
  const { categoriesSelectData } = useAppSelector((store) => store.categories);
  const [nameValue, setNameValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    LoadCategoryData(dispatch);
  }, []);

  return (
    <Overlay>
      <ModalContainer>
        <Title>Register New Hero</Title>
        <CategoryRegisterForm>
          <CardInput
            type="text"
            id="input-field"
            value={nameValue}
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
            placeholder="Name"
          />
          <CardSelect
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option value="" disabled hidden>
              Select a Category
            </option>
            {categoriesSelectData.map((category: ICategoryList) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </CardSelect>
          <CheckboxWrapper>
            <label htmlFor="checkbox">Active</label>
            <CardCheckbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          </CheckboxWrapper>
        </CategoryRegisterForm>
        <ButtonsContainer>
          <Button
            disabled={
              nameValue === "" || nameValue.length < 3 || selectedValue === ""
            }
            $confirm
            $disable={
              nameValue === "" || nameValue.length < 3 || selectedValue === ""
            }
            onClick={() => {
              RegisterHeroesAPI(
                nameValue,
                selectedValue,
                isChecked,
                onCancel,
                dispatch
              );
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
