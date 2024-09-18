import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategoryList } from "../../components/CategoriesBody/utils";

type ICategoriesProps = {
  categoriesSelectData: ICategoryList[];
  categoriesSelectedItem: ICategoryList;
};

const categoriesInitialState: ICategoriesProps = {
  categoriesSelectData: [{ id: 0, name: "" }],
  categoriesSelectedItem: { id: 0, name: "" },
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesInitialState,
  reducers: {
    categoriesSelectData: (state, action: PayloadAction<ICategoryList[]>) => {
      state.categoriesSelectData = action.payload;
    },
    categoriesSelectedItem: (state, action: PayloadAction<ICategoryList>) => {
      state.categoriesSelectedItem = action.payload;
    },
  },
});
