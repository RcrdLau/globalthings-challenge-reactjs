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
} from "./styles";
import { ICategoryList, LoadCategoryData, SearchCategoryAPI } from "./utils";
import ButtonCreate from "../ButtonCreate";
import CategoryCard from "../CategoriesCard";

const CategoryBody: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoriesSelectData, categoriesSelectedItem } = useAppSelector(
    (store) => store.categories
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showCard, setShowCard] = useState<boolean>(false);

  useEffect(() => {
    LoadCategoryData(dispatch);
  }, []);

  return (
    <CategoryContainer>
      <CategoryWrapper>
        <FormContainer>
          <Form>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled hidden>
                Select a category
              </option>
              {categoriesSelectData.map((category: ICategoryList) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
            <SearchButton
              $disabled={selectedCategory === ""}
              disabled={selectedCategory === ""}
              onClick={() =>
                SearchCategoryAPI(selectedCategory, dispatch, setShowCard)
              }
            >
              🔍
            </SearchButton>
          </Form>
          <ButtonCreate buttonText={"Category"} />
        </FormContainer>
        {showCard && (
          <CategoryCard
            id={String(categoriesSelectedItem.id)}
            name={categoriesSelectedItem.name}
            setShowCard={setShowCard}
          />
        )}
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default CategoryBody;
