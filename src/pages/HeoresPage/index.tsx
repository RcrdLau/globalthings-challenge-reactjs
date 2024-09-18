import React from "react";
import HeaderComponent from "../../components/Header";
import CategoryBody from "../../components/CategoriesBody";
import { MainContainer } from "../CategoriesPage/styles";
import HeroesBody from "../../components/HeroesBody";

const HeroesPage = () => {
  return (
    <MainContainer>
      <HeaderComponent />
      <HeroesBody />
    </MainContainer>
  );
};

export default HeroesPage;
