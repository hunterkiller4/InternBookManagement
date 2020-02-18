import { Book } from 'src/app/book/book.model';
import { BookActions, BookActionsType } from '../actions/book.actions';
import * as _ from 'lodash';

export interface BookState {
  books: Book[];
  isLoading: boolean;
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
    case BookActionsType.DELETE_BOOK_SUCCESS: {
      const newBooks = _.filter(state.books, e => e.id !== action.payload);
      return {
        ...state,
        books: newBooks
      };
    }
    case BookActionsType.CREATE_BOOK: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BookActionsType.CREATE_BOOK_SUCCESS: {
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    }
    case BookActionsType.CREATE_BOOK_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }
    case BookActionsType.UPDATE_BOOK: {
      return {
        ...state,
        isLoading: true
      };
    }
    case BookActionsType.UPDATE_BOOK_SUCCESS: {
      for (const item of initialBookState.books) {
        if (item.id === action.payload.id) {
          Object.assign({}, item, action.payload.newBook);
        }
      }
      return {
        ...state
      };
    }
    case BookActionsType.UPDATE_BOOK_FAILURE: {
      return {
        ...state,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
