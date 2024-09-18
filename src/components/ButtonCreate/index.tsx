import React, { useState } from "react";
import { NewCategoryButton, Icon } from "./styles";
import { CategoriesRegisterModal } from "../CategoriesRegisterModal";

interface NewCategoryButtonProps {
  buttonText: string;
}

const ButtonCreate: React.FC<NewCategoryButtonProps> = ({ buttonText }) => {
  const [modalRegisterControler, setModalRegisterControler] =
    useState<boolean>(false);

  return (
    <>
      <NewCategoryButton onClick={() => setModalRegisterControler(true)}>
        <Icon viewBox="0 0 24 24">
          <path d="M13 11V5H11v6H5v2h6v6h2v-6h6v-2h-6z" />
        </Icon>
        New {buttonText}
      </NewCategoryButton>
      {modalRegisterControler && (
        <CategoriesRegisterModal
          onConfirm={async () => {}}
          onCancel={() => setModalRegisterControler(false)}
        />
      )}
    </>
  );
};

export default ButtonCreate;
