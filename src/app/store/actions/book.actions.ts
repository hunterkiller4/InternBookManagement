import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';

export enum BookActionsType {
  GET_BOOKS = '[Book] Get Books',
  GET_BOOKS_SUCCESS = '[Book] Get Books Success',
  GET_BOOKS_FAILURE = '[Book] Get Book Fail',

  DELETE_BOOK = '[Book] Deletes Book',
  DELETE_BOOK_SUCCESS = '[Book] Deletes Book Success',
  DELETE_BOOK_FAILURE = '[Book] Deletes Book Failure',

  CREATE_BOOK = '[Book] Create Book',
  CREATE_BOOK_SUCCESS = '[Book] Creates Book Success',
  CREATE_BOOK_FAILURE = '[Book] Create Book Failure',

  UPDATE_BOOK = '[Book] Updates Book',
  UPDATE_BOOK_SUCCESS = '[Book] Updates Book Success',
  UPDATE_BOOK_FAILURE = '[Book] Updates Book Failure',
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

export class DeleteBook implements Action {
  public readonly type = BookActionsType.DELETE_BOOK;
  constructor(public payload: number) {}
}

export class DeleteBookSuccess implements Action {
  public readonly type = BookActionsType.DELETE_BOOK_SUCCESS;
  constructor(public payload: number ) {}
}

export class DeleteBookFail implements Action {
  public readonly type = BookActionsType.DELETE_BOOK_FAILURE;
}

export class CreateBook implements Action {
  public readonly type = BookActionsType.CREATE_BOOK;
  constructor(public payload: Book[]) {}
}

export class CreateBookSuccess implements Action {
  public readonly type = BookActionsType.CREATE_BOOK_SUCCESS;
  constructor(public payload: Book) {}
}

export class CreateBookFail implements Action {
  public readonly type = BookActionsType.CREATE_BOOK_FAILURE;
}

export class UpdateBook implements Action {
  public readonly type = BookActionsType.UPDATE_BOOK;
  constructor(public payload: Book[]) {}
}

export class UpdateBookSuccess implements Action {
  public readonly type = BookActionsType.UPDATE_BOOK_SUCCESS;
  constructor(public payload: {
    id: number;
    newBook: Book;
  }) {}
}

export class UpdateBookFail implements Action {
  public readonly type = BookActionsType.UPDATE_BOOK_FAILURE;
}

export type BookActions = GetBooks | GetBooksSuccess | GetBooksFail | DeleteBook | DeleteBookSuccess |
            DeleteBookFail | CreateBook | CreateBookSuccess | CreateBookFail | UpdateBook | UpdateBookSuccess | UpdateBookFail ;
