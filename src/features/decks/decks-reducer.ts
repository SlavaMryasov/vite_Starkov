import { ItemType } from "./decks-api"

const initialState = {
  decks: [] as ItemType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS': {
      return { ...state, decks: action.items }
    }
    case 'SET-DECK': {
      return { ...state, decks: [action.item, ...state.decks] }
    }
    default:
      return state
  }
}

export const setDecksAC = (items: ItemType[]) => ({ type: 'SET-DECKS', items } as const)
export const setDeckAC = (item: ItemType) => ({ type: 'SET-DECK', item } as const)

type SetDecksType = ReturnType<typeof setDecksAC>
type SetDeckType = ReturnType<typeof setDeckAC>

type DecksActions = SetDecksType | SetDeckType
