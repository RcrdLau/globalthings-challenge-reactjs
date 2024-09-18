import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import {
  categoriesSelectData,
  categoriesSelectedItem,
} from "../../store/categories/actions";
import { accessKeyAPI, baseUrlAPI } from "../../constants/baseUrlAPi";
import { Dispatch as ReactDispatch, SetStateAction } from "react";
import { toast } from "../Toast";

export interface ICategoryList {
  id: number;
  name: string;
}

export interface Item {
  Id: number;
  Name: string;
}

export const LoadCategoryData = async (dispatch: Dispatch) => {
  const url = "Category";

  await axios
    .get(baseUrlAPI + url, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      let listCategories: ICategoryList[] = [];
      res.data.Items.forEach((item: Item) => {
        listCategories.push({
          id: item.Id ? item.Id : 0,
          name: item.Name ? item.Name : "",
        });
      });
      dispatch(categoriesSelectData(listCategories));
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
    });
};

export const SearchCategoryAPI = async (
  searchId: string,
  dispatch: Dispatch,
  setShowCard: ReactDispatch<SetStateAction<boolean>>
) => {
  const url = "Category/" + searchId;
  await axios
    .get(baseUrlAPI + url, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      let categoriesItem: ICategoryList;

      categoriesItem = {
        id: res.data.Id ? res.data.Id : 0,
        name: res.data.Name ? res.data.Name : "",
      };
      dispatch(categoriesSelectedItem(categoriesItem));
      setShowCard(true);
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
      setShowCard(false);
    });
};
