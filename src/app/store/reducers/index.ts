import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { BookState, initialBookState, bookReducers } from "./book.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  router?: RouterReducerState;
  book: BookState;
}

export const initialAppState: AppState = {
  book: initialBookState
};

export function getInitialState(): AppState {
  return initialAppState;
}

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  book: bookReducers
};
