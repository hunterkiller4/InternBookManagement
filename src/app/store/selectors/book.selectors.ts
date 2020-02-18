import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { BookState } from '../reducers/book.reducers';

const selectUsers = (state: AppState) => state.book;

export const getBooks = createSelector(
  selectUsers,
  (state: BookState) => state.books
);

export const getIsLoading = createSelector(
  selectUsers,
  (state: BookState) => state.isLoading
);
