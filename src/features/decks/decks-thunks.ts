import { Dispatch } from 'redux';
import { setStatusAC } from '../../app/app-reducer.ts';
import { UpdateDeckParams, decksAPI } from './decks-api.ts';
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts';
import { isAxiosError } from 'axios';

interface AxiosError<T> {
  message: string;
  response?: {
    data: T;
    status: number;
  };
}

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusAC('loading'))
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setStatusAC('succeeded'))
  } catch (err) {

    dispatch(setStatusAC('failed'))

  }
}


export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))

  }
  catch (e) {
    let errorMessage: string
    if (isAxiosError<ServerError>(e)) {
      errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
    } else {
      errorMessage = (e as Error).message
    }

    console.log(errorMessage)
  }

}

type ServerError = {
  errorMessages: { field: string, message: string }[]
}