import React, {
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import {
  CardText,
  CardIndex,
  TextWrapper,
  EditButton,
  DeleteButton,
  CardWrapper,
  CardContainer,
  CardInput,
  CancelButton,
  ConfirmButton,
} from "./styles";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import {
  CancelEditButtonClick,
  DeleteButtonClick,
  EditButtonClick,
  UpdateCategoryName,
} from "./utils";
import { CategoriesModal } from "../CategoriesModal";
import {
  ConfirmIcon,
  CancelIcon,
  EditIcon,
  DeleteIcon,
} from "../../assets/icons/buttons";

// Definindo o tipo para as props
interface CardProps {
  id: string;
  name: string;
  setShowCard: Dispatch<SetStateAction<boolean>>;
}

// Componente funcional com props
const CategoryCard: React.FC<CardProps> = ({ id, name, setShowCard }) => {
  const dispatch = useAppDispatch();
  const [editControler, setEditControler] = useState<boolean>(false);
  const [nameValue, setNameValue] = useState<string>(name);
  const [modalControler, setModalControler] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNameValue(name);
  }, [name]);

  useEffect(() => {
    if (editControler && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editControler]);

  return (
    <CardContainer>
      <CardWrapper>
        <TextWrapper $editing={editControler}>
          {editControler ? (
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
          ) : (
            <>
              <CardText>{name}</CardText>
            </>
          )}
        </TextWrapper>

        {editControler ? (
          <>
            <ConfirmButton
              onClick={() =>
                UpdateCategoryName(
                  id,
                  nameValue,
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
          onConfirm={async () =>
            await DeleteButtonClick(id, setShowCard, dispatch)
          }
          onCancel={() => setModalControler(false)}
        />
      )}
    </CardContainer>
  );
};

export default CategoryCard;
