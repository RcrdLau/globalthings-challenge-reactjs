import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./categories/slice";
import { heroesSlice } from "./heroes/slice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    heroes: heroesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
