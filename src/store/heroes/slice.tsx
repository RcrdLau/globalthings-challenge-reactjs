import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryList, Item } from "../../components/CategoriesBody/utils";
import { IHeroesList } from "../../components/HeroesBody/utils";

type IHeroesProps = {
  heroesSelectData: IHeroesList[];
  heroSelectedItem: IHeroesList;
};

const heroesInitialState: IHeroesProps = {
  heroesSelectData: [
    { id: 0, name: "", active: false, categoryId: 0, categoryName: "" },
  ],
  heroSelectedItem: {
    id: 0,
    name: "",
    active: false,
    categoryId: 0,
    categoryName: "",
  },
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: heroesInitialState,
  reducers: {
    heroesSelectData: (state, action: PayloadAction<IHeroesList[]>) => {
      state.heroesSelectData = action.payload;
    },
    heroSelectedItem: (state, action: PayloadAction<IHeroesList>) => {
      state.heroSelectedItem = action.payload;
    },
  },
});
