import axios from 'axios'
import { FormValues } from './AddNewDeckForm/AddNewDeckForm';

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})


type AuthorType = {
  id: string;
  name: string;
};

export type ItemType = {
  isFavorite: boolean;
  author: AuthorType;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
};

type PaginationType = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};

type ResponseType = {
  items: ItemType[];
  pagination: PaginationType;
};



export const decksApi = {
  getDecks() {
    return instance.get<ResponseType>('/v2/decks')
  },
  addDeck(data: FormValues) {
    return instance.post<ItemType>('/v1/decks', data)
  }
}

