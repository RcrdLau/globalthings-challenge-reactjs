import axios from "axios";
import { accessKeyAPI, baseUrlAPI } from "../../constants/baseUrlAPi";
import { LoadCategoryData, SearchCategoryAPI } from "../CategoriesBody/utils";
import { Dispatch } from "@reduxjs/toolkit";
import { Dispatch as ReactDispatch, SetStateAction } from "react";
import { toast } from "../Toast";

export const CancelEditButtonClick = (
  setEditControler: React.Dispatch<React.SetStateAction<boolean>>,
  setNameValue: React.Dispatch<React.SetStateAction<string>>,
  name: string
): void => {
  setEditControler(false);
  setNameValue(name);
};

export const EditButtonClick = (
  setEditControler: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setEditControler(true);
};

export const UpdateCategoryName = async (
  cardId: string,
  cardNameUpdated: string,
  setEditControler: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: Dispatch,
  setShowCard: ReactDispatch<SetStateAction<boolean>>
) => {
  const url = "Category/" + cardId;

  const updatedCategoryName = {
    Id: Number(cardId),
    Name: cardNameUpdated,
  };

  await axios
    .put(baseUrlAPI + url, updatedCategoryName, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      setEditControler(false);
      LoadCategoryData(dispatch);
      SearchCategoryAPI(cardId, dispatch, setShowCard);
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
    });
};

export const DeleteButtonClick = async (
  cardId: string,
  setShowCard: ReactDispatch<SetStateAction<boolean>>,
  dispatch: Dispatch
) => {
  const url = "Category/" + cardId;

  await axios
    .delete(baseUrlAPI + url, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      window.location.reload();
      setShowCard(false);
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
    });
};
