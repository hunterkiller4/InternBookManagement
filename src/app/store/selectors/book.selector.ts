import { AppState } from "../reducers";
import { BookState } from "../reducers/book.reducer";
import { createSelector } from "@ngrx/store";

const selectBooks = (state: AppState) => state.book;

export const getBooks = createSelector(
  selectBooks,
  (state: BookState) => state.books
);

export const getIsLoading = createSelector(
  selectBooks,
  (state: BookState) => state.isLoading
);
