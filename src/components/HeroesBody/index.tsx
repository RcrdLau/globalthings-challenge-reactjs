import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import {
  CategoryContainer,
  CategoryWrapper,
  FormContainer,
  Select,
  SearchButton,
  Form,
} from "../CategoriesBody/styles";
import { SearchCategoryAPI } from "../CategoriesBody/utils";
import { IHeroesList, LoadHeroesData, SearchHeroAPI } from "./utils";
import ButtonNewHero from "../ButtonNewHero";
import HeroCard from "../HeroCard";

const HeroesBody: React.FC = () => {
  const dispatch = useAppDispatch();
  const { heroesSelectData, heroSelectedItem } = useAppSelector(
    (store) => store.heroes
  );
  const [selectedHero, setSelectedHero] = useState<string>("");
  const [showCard, setShowCard] = useState<boolean>(false);
  console.log("heroesSelectData: ", heroesSelectData);
  useEffect(() => {
    LoadHeroesData(dispatch);
  }, []);

  return (
    <CategoryContainer>
      <CategoryWrapper>
        <FormContainer>
          <Form>
            <Select
              value={selectedHero}
              onChange={(e) => setSelectedHero(e.target.value)}
            >
              <option value="" disabled hidden>
                Select a hero
              </option>
              {heroesSelectData.map((heroesItem: IHeroesList) => (
                <option key={heroesItem.id} value={heroesItem.id}>
                  {heroesItem.name}
                </option>
              ))}
            </Select>
            <SearchButton
              $disabled={selectedHero === ""}
              disabled={selectedHero === ""}
              onClick={() => SearchHeroAPI(selectedHero, dispatch, setShowCard)}
            >
              🔍
            </SearchButton>
          </Form>
          <ButtonNewHero buttonText={"Hero"} />
        </FormContainer>
        {showCard && (
          <HeroCard
            id={String(heroSelectedItem.id)}
            name={heroSelectedItem.name}
            setShowCard={setShowCard}
            active={heroSelectedItem.active}
            category={heroSelectedItem.categoryName}
            categoryId={String(heroSelectedItem.categoryId)}
          />
        )}
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default HeroesBody;
