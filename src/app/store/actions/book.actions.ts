import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';

export enum BookActionsType {
  GET_BOOKS = '[Book] Get Books',
  GET_BOOKS_SUCCESS = '[Book] Get Books Success',
  GET_BOOKS_FAILURE = '[Book] Get Book Fail',
}

export class GetBooks implements Action {
  public readonly type = BookActionsType.GET_BOOKS;
}

export class GetBooksSuccess implements Action {
  public readonly type = BookActionsType.GET_BOOKS_SUCCESS;
  constructor(public payload: Book[]) {}
}

export class GetBooksFail implements Action {
  public readonly type = BookActionsType.GET_BOOKS_FAILURE;
}

export type BookActions = GetBooks | GetBooksSuccess | GetBooksFail;
