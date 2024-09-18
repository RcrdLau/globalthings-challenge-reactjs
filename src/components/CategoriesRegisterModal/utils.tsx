import axios from "axios";
import { accessKeyAPI, baseUrlAPI } from "../../constants/baseUrlAPi";
import { Dispatch } from "@reduxjs/toolkit";
import { LoadCategoryData } from "../CategoriesBody/utils";
import { toast } from "../Toast";

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const RegisterCategoryAPI = async (
  categoryName: string,
  onCancel: () => void,
  dispatch: Dispatch
) => {
  const url = "Category";

  const registerParams = { Name: capitalizeFirstLetter(categoryName) };

  await axios
    .post(baseUrlAPI + url, registerParams, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      LoadCategoryData(dispatch);
      onCancel();
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
    });
};
