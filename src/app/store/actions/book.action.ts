import { Action } from "@ngrx/store";
import { Book } from "src/app/models/book.model";

export enum BookActionsType {
  GET_BOOKS = "[Book] Get Books",
  GET_BOOKS_SUCCESS = "[Book] Get Books Success",
  GET_BOOKS_FAILURE = "[Book] Get Books Failure"
}

export class GetBooks implements Action {
  public readonly type = BookActionsType.GET_BOOKS;
}

export class GetBooksSuccess implements Action {
  public readonly type = BookActionsType.GET_BOOKS_SUCCESS;
  constructor(public payload: Book[]) {}
}

export class GetBooksFailure implements Action {
  public readonly type = BookActionsType.GET_BOOKS_FAILURE;
}

export type BookActions = GetBooks | GetBooksSuccess | GetBooksFailure;
