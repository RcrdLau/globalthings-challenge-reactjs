import React, {
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { CategoriesModal } from "../CategoriesModal";
import {
  ConfirmIcon,
  CancelIcon,
  EditIcon,
  DeleteIcon,
} from "../../assets/icons/buttons";
import {
  CardContainer,
  CardWrapper,
  CardInput,
  CardText,
  ConfirmButton,
  CancelButton,
  EditButton,
  DeleteButton,
  CardCategoryText,
} from "../CategoriesCard/styles";
import {
  CancelEditButtonClick,
  EditButtonClick,
} from "../CategoriesCard/utils";
import { CheckboxHeroWrapper, HeroTextWrapper, TextContainer } from "./styles";
import { ICategoryList, LoadCategoryData } from "../CategoriesBody/utils";
import { CardSelect, CardCheckbox } from "../HeroesRegisterModal/styles";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import { DeleteHeroButtonClick, UpdateHero } from "./utils";

interface CardProps {
  id: string;
  name: string;
  active: boolean;
  category: string;
  categoryId: string;
  setShowCard: Dispatch<SetStateAction<boolean>>;
}

const HeroCard: React.FC<CardProps> = ({
  id,
  name,
  active,
  category,
  categoryId,
  setShowCard,
}) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { categoriesSelectData } = useAppSelector((store) => store.categories);
  const [nameValue, setNameValue] = useState<string>(name);
  const [selectedValue, setSelectedValue] = useState<string>(categoryId);
  const [isChecked, setIsChecked] = useState(active);
  const [editControler, setEditControler] = useState<boolean>(false);
  const [modalControler, setModalControler] = useState<boolean>(false);

  useEffect(() => {
    setNameValue(name);
  }, [name]);

  useEffect(() => {
    LoadCategoryData(dispatch);
  }, []);

  useEffect(() => {
    if (editControler && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editControler]);

  return (
    <CardContainer>
      <CardWrapper>
        <TextContainer $editing={editControler} $active={active}>
          {editControler ? (
            <HeroTextWrapper>
              <CardInput
                type="text"
                id="input-field"
                value={nameValue}
                onChange={(e) => {
                  setNameValue(e.target.value);
                }}
                placeholder="Type a category"
                ref={inputRef}
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
              <CheckboxHeroWrapper>
                <label htmlFor="checkbox">Active</label>
                <CardCheckbox
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
              </CheckboxHeroWrapper>
            </HeroTextWrapper>
          ) : (
            <HeroTextWrapper>
              <CardText>Name: {name}</CardText>
              <CardCategoryText>Category: {category}</CardCategoryText>
              <CardText>{active ? "Active" : "Inactive"}</CardText>
            </HeroTextWrapper>
          )}
        </TextContainer>
        {editControler ? (
          <>
            <ConfirmButton
              onClick={() =>
                UpdateHero(
                  id,
                  nameValue,
                  selectedValue,
                  isChecked,
                  setEditControler,
                  dispatch,
                  setShowCard
                )
              }
            >
              <ConfirmIcon />
            </ConfirmButton>
            <CancelButton
              onClick={() =>
                CancelEditButtonClick(setEditControler, setNameValue, name)
              }
            >
              <CancelIcon />
            </CancelButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => EditButtonClick(setEditControler)}>
              <EditIcon />
            </EditButton>
            <DeleteButton onClick={() => setModalControler(true)}>
              <DeleteIcon />
            </DeleteButton>
          </>
        )}
      </CardWrapper>
      {modalControler && (
        <CategoriesModal
          onConfirm={async () => await DeleteHeroButtonClick(id, setShowCard)}
          onCancel={() => setModalControler(false)}
        />
      )}
    </CardContainer>
  );
};

export default HeroCard;
