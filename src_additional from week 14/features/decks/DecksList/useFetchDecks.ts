import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { getDecksTC } from "../decks-thunks";



export const useFetchDecks = () => {
    const dispatch = useAppDispatch()
    const items = useAppSelector(state => state.decksReducer.decks)

    useEffect(() => {
        dispatch(getDecksTC())
    }, [])
    return ({ items })
};
