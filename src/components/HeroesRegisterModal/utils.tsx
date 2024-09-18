import axios from "axios";
import { accessKeyAPI, baseUrlAPI } from "../../constants/baseUrlAPi";
import { Dispatch } from "@reduxjs/toolkit";
import { toast } from "../Toast";
import { LoadHeroesData } from "../HeroesBody/utils";

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const RegisterHeroesAPI = async (
  categoryName: string,
  selectedValue: string,
  isChecked: boolean,
  onCancel: () => void,
  dispatch: Dispatch
) => {
  const url = "Heroes";

  const registerParams = {
    Name: capitalizeFirstLetter(categoryName),
    CategoryId: selectedValue,
    Active: isChecked,
  };

  await axios
    .post(baseUrlAPI + url, registerParams, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      LoadHeroesData(dispatch);
      onCancel();
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
    });
};
