import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { accessKeyAPI, baseUrlAPI } from "../../constants/baseUrlAPi";
import { toast } from "../Toast";
import { Dispatch as ReactDispatch, SetStateAction } from "react";
import { LoadHeroesData, SearchHeroAPI } from "../HeroesBody/utils";

export const UpdateHero = async (
  cardId: string,
  cardNameUpdated: string,
  categoryId: string,
  isChecked: boolean,
  setEditControler: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: Dispatch,
  setShowCard: ReactDispatch<SetStateAction<boolean>>
) => {
  const url = "Heroes/" + cardId;

  const updatedHeroName = {
    Id: Number(cardId),
    Name: cardNameUpdated,
    CategoryId: Number(categoryId),
    Active: isChecked,
  };

  await axios
    .put(baseUrlAPI + url, updatedHeroName, {
      headers: {
        AccessKey: accessKeyAPI,
      },
    })
    .then((res: any) => {
      setEditControler(false);
      LoadHeroesData(dispatch);
      SearchHeroAPI(cardId, dispatch, setShowCard);
    })
    .catch((error: any) => {
      toast({ type: "error", text: error.response.data.Message });
    });
};

export const DeleteHeroButtonClick = async (
  cardId: string,
  setShowCard: ReactDispatch<SetStateAction<boolean>>
) => {
  const url = "Heroes/" + cardId;

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
