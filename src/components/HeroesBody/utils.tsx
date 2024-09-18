import axios from "axios";
import { toast } from "../Toast";
import { Dispatch } from "@reduxjs/toolkit";
import { baseUrlAPI, accessKeyAPI } from "../../constants/baseUrlAPi";
import { heroesSelectData } from "../../store/heroes/actions";

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
