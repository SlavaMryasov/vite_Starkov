import { AppDispatch } from "../../app/store";
import { FormValues } from "./AddNewDeckForm/AddNewDeckForm";
import { decksApi } from "./decks-api";
import { setDeckAC, setDecksAC } from "./decks-reducer";

export const getDecksTC = () => (dispatch: AppDispatch) => {
    decksApi.getDecks()
        .then(res => dispatch(setDecksAC(res.data.items)))
}

export const addDeckTC = (data: FormValues) => (dispatch: AppDispatch) => {
    return decksApi.addDeck(data)
        .then(res => dispatch(setDeckAC(res.data)))
} 