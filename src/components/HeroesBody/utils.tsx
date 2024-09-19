import axios from "axios";
import { toast } from "../Toast";
import { Dispatch } from "@reduxjs/toolkit";
import { baseUrlAPI, accessKeyAPI } from "../../constants/baseUrlAPi";
import { heroesSelectData, heroSelectedItem } from "../../store/heroes/actions";
import { Dispatch as ReactDispatch, SetStateAction } from "react";

export interface IHeroesList {
  id: number;
  name: string;
  active: boolean;
  categoryId: number;
  categoryName: string;
}

export interface HeroItem {
  Id: number;
  Name: string;
  Active: boolean;
  Category: { Id: number; Name: string };
}
export const LoadHeroesData = async (dispatch: Dispatch) => {
  const url = "Heroes";

  await axios
    .get(baseUrlAPI + url, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      console.log("res.data:", res.data);
      let listHeroes: IHeroesList[] = [];
      res.data.Items.forEach((item: HeroItem) => {
        listHeroes.push({
          id: item.Id ? item.Id : 0,
          name: item.Name ? item.Name : "",
          active: item.Active ? item.Active : false,
          categoryId: item.Category.Id ? item.Category.Id : 0,
          categoryName: item.Category.Name ? item.Category.Name : "",
        });
      });
      dispatch(heroesSelectData(listHeroes));
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
    });
};

export const SearchHeroAPI = async (
  searchId: string,
  dispatch: Dispatch,
  setShowCard: ReactDispatch<SetStateAction<boolean>>
) => {
  const url = "Heroes/" + searchId;
  await axios
    .get(baseUrlAPI + url, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      let heroItem: IHeroesList;

      heroItem = {
        id: res.data.Id ? res.data.Id : 0,
        name: res.data.Name ? res.data.Name : "",
        active: res.data.Active ? res.data.Active : false,
        categoryId: res.data.Category.Id ? res.data.Category.Id : 0,
        categoryName: res.data.Category.Name ? res.data.Category.Name : "",
      };
      dispatch(heroSelectedItem(heroItem));
      setShowCard(true);
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
      setShowCard(false);
    });
};
