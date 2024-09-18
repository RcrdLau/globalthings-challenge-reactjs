import React from "react";
import { MainContainer } from "./styles";
import HeaderComponent from "../../components/Header";
import CategoryBody from "../../components/CategoriesBody";

const CategoriesPage = () => {
  return (
    <MainContainer>
      <HeaderComponent></HeaderComponent>
      <CategoryBody></CategoryBody>
    </MainContainer>
  );
};

export default CategoriesPage;
