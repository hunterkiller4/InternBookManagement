import { BookActionsType } from "./../actions/book.action";
import { Book } from "src/app/models/book.model";
import { BookActions } from "../actions";

export interface BookState {
  books: Book[];
  isLoading: Boolean;
}

export const initialBookState: BookState = {
  books: null,
  isLoading: false
};

export const bookReducers = (
  state = initialBookState,
  action: BookActions
): BookState => {
  switch (action.type) {
    case BookActionsType.GET_BOOKS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BookActionsType.GET_BOOKS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        books: action.payload
      };
    }

    case BookActionsType.GET_BOOKS_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }

    default:
      return state;
  }
};
